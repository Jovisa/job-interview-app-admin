import React from "react";
import { Link } from "react-router-dom";
import ComunicationService from "../../../../services/comunicationService";
import ChoseCandidate from "./choseCandidate";

export default class Candidate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
            name: "",
            id: "",
        };

        this.comunicationService = new ComunicationService();
        this.handleChosenCandidate = this.handleChosenCandidate.bind(this);
        this.handleCandidate = this.handleCandidate.bind(this);
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
        let candidatesList = this.state.candidates.map(candidate => {
            return (
                <ChoseCandidate key={candidate.id} candidate={candidate} handleChosenCandidate={this.handleChosenCandidate} />
            );
        })

        return (
            <div className="container">
                <div className="row">
                    <h1>Candidate</h1>
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