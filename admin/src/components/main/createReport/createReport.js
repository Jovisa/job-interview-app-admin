import React from 'react';
import Sidebar from "./sidebar";
import CreationPhase from "./creationPhase/creationPhase";

export default class CreateReport extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col col-12 col-md-9">
                        <CreationPhase />
                    </div>
                </div>
            </div>
        );
    }
}