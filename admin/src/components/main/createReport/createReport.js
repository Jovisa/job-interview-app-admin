import React from 'react';
import { Switch, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Candidate from "./creationPhase/candidate";
import Company from "./creationPhase/company";
import Report from "./creationPhase/report";
import ComunicationService from "../../../services/comunicationService";
import RedirectionService from "../../../services/redirectionService";

export default class CreateReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateId: null,
            candidateName: "",
            companyId: null,
            companyName: "",
            interviewDate: "",
            phase: "",
            status: "",
            note: ""
        };

        this.comunicationService = new ComunicationService();
        this.redirectionService = new RedirectionService();
        this.handleReportData = this.handleReportData.bind(this);
        this.handleCandidateData = this.handleCandidateData.bind(this);
        this.handleCompanyData = this.handleCompanyData.bind(this);
        this.postReport = this.postReport.bind(this);
        this.resetState = this.resetState.bind(this);
        this.submittReport = this.submittReport.bind(this);
       
    }

    submittReport(reportData) {
        this.handleReportData(reportData);
        this.postReport(reportData);
        this.redirectionService.redirect("");
        this.resetState();

    }

    resetState() {
        this.setState({
            candidateId: null,
            candidateName: "",
            companyId: null,
            companyName: "",
            interviewDate: "",
            phase: "",
            status: "",
            note: ""
        })
    }

    postReport(reportData) {
        let report = {...this.state, ...reportData};
        this.comunicationService.postReport(report, 
        response => {
            console.log("response:", response);
        }, error => {
            console.log("error:", error);
        })
    }

    handleReportData(reportData) {
        this.setState({
            interviewDate: reportData.interviewDate,
            phase: reportData.phase,
            status: reportData.status,
            note: reportData.note,
        })
    }

    handleCandidateData(candidateData) {

      this.setState({
        candidateId: candidateData.id,
        candidateName: candidateData.name,
      })

    }

    handleCompanyData(companyData) {
      this.setState({
        companyId: companyData.id,
        companyName: companyData.name,
      })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-3">
                        <Sidebar candidateName={this.state.candidateName} companyName={this.state.companyName}/>
                    </div>
                    <div className="col col-12 col-md-9">
                        <Switch>
                            <Route exact path="/create-report" component={(props) => <Candidate handleCandidateData={this.handleCandidateData} />} />
                            <Route path="/create-report/company" component={(props) => <Company handleCompanyData={this.handleCompanyData} />} />
                            <Route path="/create-report/report" component={(props) => <Report handleReportData={this.submittReport} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}