import React from "react";

export default class ReportsList extends React.Component {


    render() {
        let reports = this.props.reports;
        return (
            reports.map((report, index) => {
                let date = new Date(report.interviewDate);
                let formatedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.`
                return (
                    <div className="row my-3" key={index}>
                        <div className="col col-12 col-md-4">{report.companyName}</div>
                        <div className="col col-12 col-md-4">{report.candidateName}</div>
                        <div className="col col-12 col-md-4">
                            <div className="row">
                                <div className="col col-5">{formatedDate}</div>
                                <div className="col col-3">{report.phase}</div>
                                <div className="col col-4">
                                    <button>detal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        );

    }


}