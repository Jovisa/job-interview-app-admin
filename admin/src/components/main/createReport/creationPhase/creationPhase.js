import React from 'react';
import { Switch, Route } from "react-router-dom";
import Candidate from "./candidate/candidate";
import Company from "./company/company";
import Report from "./reportDetail/report";

export default class CreationPhase extends React.Component {
    render() {
        return(
           <div>
                <Switch>
                    <Route path="/" component={Candidate} />
                    <Route path="/company" component={Company} />
                    <Route path="/report" component={Report} />
                </Switch>
            </div>
        );
    }
}