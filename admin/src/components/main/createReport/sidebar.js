import React from 'react';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h5>1 Select Candidate</h5>
                    <h5>2 Select Company</h5>
                    <h5>3 Fill Report Detail</h5>
                    <hr/>
                </div>

                <div>
                    <div>Candidate:</div>
                    <div><h6>{this.props.candidateName}</h6></div>
                </div>
                <div>
                    <div>Company:</div>
                    <div><h6>{this.props.companyName}</h6></div>
                </div>

            </div>
        );
    }
}