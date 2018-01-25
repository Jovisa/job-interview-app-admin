import React from 'react';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="row justify-content-center my-3">
                <div className="col col-12 my-1 text-center">
                    <button className={`btn ${!this.props.candidateName ? "btn-primary" : "btn-secondary"}`}>1 Select Candidate</button>
                </div>
                <div className="col col-12 my-1 text-center">
                    <button className={`btn ${this.props.candidateName && !this.props.companyName ? "btn-primary" : "btn-secondary"}`}>2 Select Company</button>
                </div>
                <div className="col col-12 my-1 text-center">
                    <button className={`btn ${this.props.candidateName && this.props.companyName ? "btn-primary" : "btn-secondary"}`}>3 Fill Report Detail</button>
                </div>
                <hr />

                <div className="col col-12 text-center mt-4">
                    <div>Candidate:</div>
                    <div><h6>{this.props.candidateName}</h6></div>
                </div>
                <div className="col col-12 text-center">
                    <div>Company:</div>
                    <div><h6>{this.props.companyName}</h6></div>
                </div>

            </div >
        );
    }
}