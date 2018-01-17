import React from "react";
import { Switch, Route } from "react-router-dom";
import Reports from "./reports/reports";
import CreateReport from "./createReport/createReport"


export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Reports} />
                    <Route path="/create-report" component={CreateReport} />
                </Switch>
            </div>
        );
    }
}