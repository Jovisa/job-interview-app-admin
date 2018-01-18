import React from "react";
import { Link } from "react-router-dom";

export default class Company extends React.Component {
    render() {
        return(
            <div>
                <h1>Company</h1>
                <Link to="/create-report"> BACK </Link>
                <Link to="/create-report/report"> NEXT </Link>
            </div>
        );
    }
}