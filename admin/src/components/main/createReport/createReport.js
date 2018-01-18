import React from 'react';
import { Switch, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Candidate from "./creationPhase/candidate";
import Company from "./creationPhase/company";
import Report from "./creationPhase/report";

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

        this.handleReportData = this.handleReportData.bind(this);
        this.handleCandidateData = this.handleCandidateData.bind(this);
        this.handleCompanyData = this.handleCompanyData.bind(this);
    }

    handleReportData(reportData) {
        
        this.setState({
            interviewDate: reportData.interviewDate,
            phase: reportData.phase,
            status: reportData.status,
            notes: reportData.notes,
        })
        
        
    }

    handleCandidateData(candidateData) {

        this.setState({
            candidateId: candidateData.candidateId,
            candidateName: candidateData.candidateName,
        })

    }

    handleCompanyData (companyData) {
        this.setState({
            companyId: companyData.companyId,
            companyName: companyData.companyName,
        })
        
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col col-12 col-md-9">
                        <Switch>
                            <Route exact path="/create-report" component={(props) => <Candidate handleCandidateData={this.handleCandidateData}/>} />
                            <Route path="/create-report/company" component={(props) => <Company handleCompanyData={this.handleCompanyData}/>} />
                            <Route path="/create-report/report" component={(props) => <Report handleSubmit={this.handleReportData}/>} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}