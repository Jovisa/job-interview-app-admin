import React from "react";
import { Link } from "react-router-dom";
import ComunicationService from "../../../../services/comunicationService";
import ChoseCandidate from "./choseCandidate";
import Search from "../../../../common/search";

export default class Candidate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
            filteredCandidates: [],
            name: "",
            id: "",
            searchString: "",
        };

        this.comunicationService = new ComunicationService();
        this.handleChosenCandidate = this.handleChosenCandidate.bind(this);
        this.handleCandidate = this.handleCandidate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.setSearchData = this.setSearchData.bind(this);
        this.filterCandidates = this.filterCandidates.bind(this);
        this.nothingFound = this.nothingFound.bind(this);
    }

    nothingFound() {
        return (
            <div className="col col-12">
                Nothing Found
            </div>
        );
    }

    filterCandidates(searchString) {
        let candidates = this.state.candidates;
        let string = searchString.toLowerCase();
        let filteredCandidates = []
        filteredCandidates = candidates.filter(candidate =>
            candidate.name.toLowerCase().includes(string)
        );
        this.setState({ filteredCandidates: filteredCandidates });
    }

    setSearchData(searchString) {
        this.setState({
            searchString: searchString,
        });
    }

    handleSearch(searchString) {
        this.setSearchData(searchString);
        this.filterCandidates(searchString);
    }

    getCandidates() {
        this.comunicationService.fetchCandidates(candidatesData => {
            this.setState({
                candidates: candidatesData
            });
        }, error => {
            console.log("error");
        })

    }

    componentDidMount() {
        this.getCandidates();
    }

    handleCandidate() {
        const candidateData = {
            id: this.state.id,
            name: this.state.name,
        }
        this.props.handleCandidateData(candidateData);
    }

    handleChosenCandidate(candidateData) {
        this.setState({
            id: candidateData.id,
            name: candidateData.name,
        });
    }


    render() {
        let candidates = this.state.searchString.length !== 0 ? this.state.filteredCandidates : this.state.candidates;
        let candidatesList;

        if (candidates.length) {
            candidatesList = candidates.map(candidate => {
                return (
                    <ChoseCandidate key={candidate.id} candidate={candidate} handleChosenCandidate={this.handleChosenCandidate} />
                );
            })
        } else {
            candidatesList = this.nothingFound();
        }



        return (
            <div className="container">
                <div className="row my-3 justify-content-end">
                    <div className="col col-12 col-md-4 col-lg-3">
                        <Search handleSearch={this.handleSearch} />
                    </div>

                </div>
                <div className="row">
                    {candidatesList}
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="create-report/company" onClick={this.handleCandidate}> NEXT </Link>
                    </div>
                </div>

            </div>
        );
    }
}