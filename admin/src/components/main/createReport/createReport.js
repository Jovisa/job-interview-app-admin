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

        // this.handleReportData = this.handleReportData.bind(this);
        this.handleCandidateData = this.handleCandidateData.bind(this);
        this.handleCompanyData = this.handleCompanyData.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handlePhase = this.handlePhase.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleNote = this.handleNote.bind(this);
    }

    // handleReportData(reportData) {
    //     this.setState({
    //         interviewDate: reportData.interviewDate,
    //         phase: reportData.phase,
    //         status: reportData.status,
    //         note: reportData.notes,
    //     })
    // }
    handleStatus(status) {
        this.setState({
            status: status,
        })
    }

    handleDate(date) {
        this.setState({
            interviewDate: date,
        })
    }

    handlePhase(phase) {
        this.setState({
            phase: phase,
        })
    }

    handleNote(note) {
        this.setState({
            note: note,
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
                        <Sidebar />
                    </div>
                    <div className="col col-12 col-md-9">
                        <Switch>
                            <Route exact path="/create-report" component={(props) => <Candidate handleCandidateData={this.handleCandidateData} />} />
                            <Route path="/create-report/company" component={(props) => <Company handleCompanyData={this.handleCompanyData} />} />
                            <Route path="/create-report/report" component={(props) => <Report handleDate={this.handleDate} handlePhase={this.handlePhase} handleStatus={this.handleStatus} handleNote={this.handleNote}/>} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}