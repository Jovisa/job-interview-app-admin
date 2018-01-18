import React from "react";

export default class ChoseCandidate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidateId: null,
            candidateName: "",
        }

        this.handleclick = this.handleclick.bind(this);
    }

    handleclick() {
        let candidate = this.props.candidate;
        let candidateData = {
            candidateId: candidate.id,
            candidateName: candidate.name,
        };
        this.props.handleCandidate(candidateData);
    }

    render() {
        let candidate = this.props.candidate;
        let defaultAvatar = "http://via.placeholder.com/100x100";

        return (
            <div className="col col-12 col-md-6" onClick={this.handleclick} >
                <div className="row my-3">
                    <div className="col-2">
                        <img className="chose-candidate-img" src={candidate.avatar ? candidate.avatar : defaultAvatar} alt="Candidate Avatar" />
                    </div>
                    <div className="col-10">
                        <div className="ml-3">{candidate.name}</div>
                        <div className="ml-3">{candidate.email}</div>
                    </div>
                </div>
            </div>
        );


    }
}