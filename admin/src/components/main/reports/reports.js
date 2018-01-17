import React from 'react';
import ComunicationService from "../../../services/comunicationService";
import ReportsList from "./singleReport";

export default class Reports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reports: [],
        };

        this.comunicationService = new ComunicationService();
    }

    getReports() {
        this.comunicationService.fetchReports(reportData => {
            console.log(`reports:`, reportData);
            this.setState({
                reports: reportData,
            });
            console.log(this.state.reports);

        }, error => {
            console.log("error");
        })

    }

    componentDidMount() {
        this.getReports();
    }

    render() {
        return (
            <div className="container">
                <ReportsList reports={this.state.reports} />
            </div>

        );

    }
}