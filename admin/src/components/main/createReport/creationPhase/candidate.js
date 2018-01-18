import React from "react";
import { Link } from "react-router-dom";
import ComunicationService from "../../../../services/comunicationService";
import ChoseCandidate from "./choseCandidate";

export default class Candidate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
        };

        this.comunicationService = new ComunicationService();
    }

    getCandidates() {
        this.comunicationService.fetchCandidates(candidatesData => {
            this.setState({
                candidates: candidatesData,
            });
        }, error => {
            console.log("error");
        })

    }

    componentDidMount() {
        this.getCandidates();
    }

    render() {
        let candidatesList = this.state.candidates.map(candidate => {
            return(
                <ChoseCandidate key={candidate.id} candidate={candidate}/>
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
                        <Link to="create-report/company"> NEXT </Link>
                    </div>
                </div>

            </div>
        );
    }
}