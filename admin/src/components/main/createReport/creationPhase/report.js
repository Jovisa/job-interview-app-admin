import React from "react";
import { Link } from "react-router-dom";

export default class Report extends React.Component {
    render() {
        return(
            <div>
                <h1>Report</h1>
                <Link to="/create-report/company"> BACK </Link>
            </div>
        );
    }
}