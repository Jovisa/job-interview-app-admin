import React from "react";
import { Link } from "react-router-dom";

export default class Report extends React.Component {
    constructor(props) {
        super(props);

        this.submitReport = this.submitReport.bind(this);
    }

    submitReport(e) {
        e.preventDefault();

        const reportData = {
            interviewDate: this.refs.date.value,
            phase: this.refs.phase.value,
            status: this.refs.status.value,
            note: this.refs.note.value,
        }
        this.props.handleReportData(reportData);
    }

    render() {
        return (

            <form action="" onSubmit={this.submitReport}>
                <div className="row">

                    <div className="col col-12 col-md-4 my-3">
                        <input type="date"  ref="date" name="date" id="" />
                    </div>

                    <div className="col col-12 col-md-4 my-3">
                        <select ref="phase" name="phase" id="" >
                            <option value="tchnical">phase</option>
                            <option value="tchnical">techical</option>
                            <option value="cv">cv</option>
                            <option value="hr">hr</option>
                        </select>
                    </div>

                    <div className="col col-12 col-md-4 my-3">
                        <select ref="status" name="status" id="" >
                            <option value="passed">status</option>
                            <option value="passed">passed</option>
                            <option value="declined">declined</option>
                        </select>
                    </div>

                    <div className="col col-12 my-3">
                        <textarea ref="note" name="note"  id="" cols="30" rows="10" ></textarea>
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