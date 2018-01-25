import React from "react";
import { Link } from "react-router-dom";

export default class Report extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            interviewDate: "",
            phase: "",
            status: "",
            note: "",
            dateError: "",
            phaseError: "",
            statusError: "",
            noteError: "",
        }
        this.submitReport = this.submitReport.bind(this);
        this.handleDateError = this.handleDateError.bind(this);
        this.handlePhaseError = this.handlePhaseError.bind(this);
        this.handleStatusError = this.handleStatusError.bind(this);
        this.handleNoteError = this.handleNoteError.bind(this);
    }

    handleNoteError() {
        this.setState({
            noteError: "Notes need to be written",
        })
    }

    handleStatusError() {
        this.setState({
            statusError: "Status need to be selected",
        })
    }

    handleDateError() {
        this.setState({
            dateError: "Date need to be selected",
        })
    }

    handlePhaseError() {
        this.setState({
            phaseError: "Phase need to be selected",
        })
    }

    submitReport(e) {
        e.preventDefault();

        const reportData = {
            interviewDate: this.state.interviewDate,
            phase: this.state.phase,
            status: this.state.status,
            note: this.state.note,
        }

        if (!reportData.interviewDate) {
            this.handleDateError();
        
        } 
        if (!reportData.phase) {
            this.handlePhaseError();
        }
        if (!reportData.status) {
            this.handleStatusError()
        }
        if (!reportData.note) {
            this.handleNoteError()
        }
        else {
            this.props.handleReportData(reportData);
        }


    }

    render() {
        return (

            <form action="" onSubmit={this.submitReport}>
                <div className="row">

                    <div className=" form-group col col-12 col-md-4 my-3">
                        <label >Interwiew Date</label>
                        <input className={`form-control ${this.state.dateError ? "is-invalid" : ""}`} type="date" ref="date" name="date" id="date" onChange={(e) => this.setState({ interviewDate: e.target.value, dateError: "" })} />
                        <div className="invalid-feedback">{this.state.dateError}</div>
                    </div>

                    <div className=" form-group col col-12 col-md-4 my-3">
                        <label for="phase">Phase</label>
                        <select className={`form-control ${this.state.phaseError ? "is-invalid" : ""}`} ref="phase" name="phase" id="phase" onChange={(e) => this.setState({ phase: e.target.value, phaseError: "" })}>
                            <option value="tchnical">phase</option>
                            <option value="tchnical">techical</option>
                            <option value="cv">cv</option>
                            <option value="hr">hr</option>
                        </select>
                        <div className="invalid-feedback">{this.state.phaseError}</div>
                    </div>

                    <div className="col col-12 col-md-4 my-3">
                        <label for="status">Status</label>
                        <select className={`form-control ${this.state.statusError ? "is-invalid" : ""}`} ref="status" name="status" id="status" onChange={(e) => this.setState({ status: e.target.value, statusError: "", })}>
                            <option value="passed">status</option>
                            <option value="passed">passed</option>
                            <option value="declined">declined</option>
                        </select>
                        <div className="invalid-feedback">{this.state.statusError}</div>
                    </div>

                    <div className="col col-12 my-3">
                        <label for="note">Notes</label>
                        <textarea className={`form-control ${this.state.noteError ? "is-invalid" : ""}`} ref="note" name="note" id="note" cols="30" rows="10" onChange={(e) => this.setState({ note: e.target.value, noteError: "" })}></textarea>
                        <div className="invalid-feedback">{this.state.noteError}</div>
                    </div>

                    <div className="col col-12 my-3">
                        <div className="row justify-content-between">
                            <div className="col col-12 col-md-3 col-lg-2">
                                <Link className="btn btn-success" to="/create-report/company"> BACK </Link>
                            </div>
                            <div className="col col-12 col-md-3 col-lg-2">
                                <button className={`btn btn-success ${this.state.interviewDate && this.state.note && this.state.status && this.state.phase ? "" : "disabled"}`} type="submit">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        );
    }
}