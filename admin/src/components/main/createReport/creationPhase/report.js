import React from "react";
import { Link } from "react-router-dom";

export default class Report extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            interviewDate: "",
            phase: "",
            status: "",
            notes: "",
        }

        this.choseDate = this.choseDate.bind(this);
        this.chosePhase = this.chosePhase.bind(this);
        this.choseStatus = this.choseStatus.bind(this);
        this.choseNote = this.choseNote.bind(this);
        // this.submitReport = this.submitReport.bind(this);
    }

    // submitReport(e) {
    //     e.preventDefault();

    //     const reportData = this.state;
    //     this.props.handleSubmit(reportData);
    // }
    choseDate(e) {
        const date = e.target.value;
        this.props.handleDate(date);
    }

    chosePhase(e) {
        const phase = e.target.value;
        this.props.handlePhase(phase);
    }

    choseStatus(e) {
        const status = e.target.value;
        this.props.handleStatus(status);
    }

    choseNote(e) {
        e.preventDefault();
        let note = e.target.value;
        this.props.handleNote(note);
    }

    render() {
        return (

            <form action="" onSubmit={this.submitReport}>
                <div className="row">

                    <div className="col col-12 col-md-4 my-3">
                        <input type="date" onChange={(e) => this.choseDate(e)} ref="date" name="date" id="" />
                    </div>

                    <div className="col col-12 col-md-4 my-3">
                        <select ref="phase" name="phase" id="" onChange={(e) => this.chosePhase(e)}>
                            <option value="tchnical">phase</option>
                            <option value="tchnical">techical</option>
                            <option value="cv">cv</option>
                            <option value="hr">hr</option>
                        </select>
                    </div>

                    <div className="col col-12 col-md-4 my-3">
                        <select ref="status" name="status" id="" onChange={(e) => this.choseStatus(e)}>
                            <option value="passed">status</option>
                            <option value="passed">passed</option>
                            <option value="declined">declined</option>
                        </select>
                    </div>

                    <div className="col col-12 my-3">
                        <textarea ref="note" name="note" id="" cols="30" rows="10" onMouseOut={(e) => this.choseNote(e)}></textarea>
                    </div>

                    <div className="col col-12 my-3">
                        <div className="row justify-content-between">
                            <div className="col col-12 col-md-3 col-lg-2">
                                <Link to="/create-report/company"> BACK </Link>
                            </div>
                            <div className="col col-12 col-md-3 col-lg-2">
                                <button type="submit">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        );
    }
}