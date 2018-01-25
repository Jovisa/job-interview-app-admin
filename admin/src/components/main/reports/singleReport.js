import React from "react";

export default class ReportsList extends React.Component {
    constructor(props) {
        super(props);

        this.showReportDetail = this.showReportDetail.bind(this);
        this.deleteReport = this.deleteReport.bind(this);
    }

    deleteReport(reportId) {
        this.props.handleDelete(reportId);
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
                    let reportId = report.id;

                    return (
                        <div className="row my-3" key={index}>
                            <div className="col col-12">
                                <div className="card my-1">
                                    <div className="row ">
                                        <div className="col col-12 col-md-3 my-2 text-center">{report.companyName}</div>
                                        <div className="col col-12 col-md-3 my-2 text-center">{report.candidateName}</div>
                                        <div className="col col-12 col-md-2 my-2 text-center">{formatedDate}</div>
                                        <div className="col col-12 col-md-2 my-2 text-center">{report.status}</div>
                                        <div className="col  col-12 col-md-2 my-2 text-center">
                                            <button className="btn btn-sm btn-primary mr-1" data-toggle="modal" data-target="#exampleModal" onClick={(e) => { this.showReportDetail(report) }}>detal</button>
                                            <button className="btn btn-sm btn-danger" onClick={(e) => { this.deleteReport(reportId) }}> X </button>
                                        </div>
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