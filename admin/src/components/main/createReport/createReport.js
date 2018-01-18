import React from 'react';
import { Switch, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Candidate from "./creationPhase/candidate";
import Company from "./creationPhase/company";
import Report from "./creationPhase/report";

export default class CreateReport extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col col-12 col-md-9">
                        <Switch>
                            <Route exact path="/create-report" component={Candidate} />
                            <Route path="/create-report/company" component={Company} />
                            <Route path="/create-report/report" component={Report} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}