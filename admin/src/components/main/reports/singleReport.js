import React from "react";

export default class ReportsList extends React.Component {
    constructor(props) {
        super(props);

        this.showReportDetail = this.showReportDetail.bind(this);
    }

    showReportDetail(report) {
        this.props.showSingleReportDetail(report);
    }

    render() {
        let reports = this.props.reports;

        if (reports.length) {

            return (
                reports.map((report, index) => {
                    let date = new Date(report.interviewDate);
                    let formatedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.`;

                    return (
                        <div className="row my-3" key={index}>
                            <div className="col col-12 col-md-4">{report.companyName}</div>
                            <div className="col col-12 col-md-4">{report.candidateName}</div>
                            <div className="col col-12 col-md-4">
                                <div className="row">
                                    <div className="col col-5">{formatedDate}</div>
                                    <div className="col col-3">{report.status}</div>
                                    <div className="col col-4">
                                        <button data-toggle="modal" data-target="#exampleModal" onClick={(e) => { this.showReportDetail(report) }}>detal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            );
        } else {
            return (
                <div className="row my-3">
                    <div className="col col-12">
                        Nothing Found
                    </div>
                </div>
            );

        }

    }


}