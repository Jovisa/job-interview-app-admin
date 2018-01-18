import React from "react";

export default class ChoseCandidate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let candidate = this.props.candidate;
        let defaultAvatar = "http://via.placeholder.com/100x100";
        console.log("candidate: ", candidate);

        return (
            <div className="col col-12 col-md-6">
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