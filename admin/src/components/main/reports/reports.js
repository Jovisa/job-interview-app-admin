import React from 'react';
import Modal from "react-modal";
import ComunicationService from "../../../services/comunicationService";
import ReportsList from "./singleReport";
import Search from "../../../common/search";

const modalStyle = {
    content: {
        maxHeight: "60%",
        overlfow: "scroll",
        maxWidth: "70%",
        margin: "auto auto"
    },

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
};

export default class Reports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reports: [],
            filteredReports: [],
            modalIsOpen: false,
            name: "",
            company: "",
            date: "",
            phase: "",
            status: "",
            note: "",
            searchString: "",

        };

        this.comunicationService = new ComunicationService();
        this.displayModal = this.displayModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setModalData = this.setModalData.bind(this);
        this.showSingleReportDetail = this.showSingleReportDetail.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.setSearchData = this.setSearchData.bind(this);
        this.filterReports = this.filterReports.bind(this);
        this.deleteReport = this.deleteReport.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.refreshReports = this.refreshReports.bind(this);
    }
    
    refreshReports(reportId) {
        let reports = this.state.reports
        let refreshedReports = reports.filter(report => 
            report.id !== reportId
        );
        this.setState({
            reports: refreshedReports,
        });
    }
    
    handleDelete(reportId) {
        this.deleteReport(reportId);
    }

    filterReports(searchString) {
        let reports = this.state.reports;
        let string = searchString.toLowerCase();
        let filteredReports = []
        filteredReports = reports
        .filter(report => 
            report.candidateName.toLowerCase().includes(string) || 
            report.companyName.toLowerCase().includes(string)
        );
        this.setState({filteredReports: filteredReports});
    }

    setSearchData(searchString) {
        this.setState({
            searchString: searchString,
        });
    }

    handleSearch(searchString) {
        this.setSearchData(searchString);
        this.filterReports(searchString);  
    }


    getReports() {
        this.comunicationService.fetchReports(reportData => {
            this.setState({
                reports: reportData,
            });
        }, error => {
            console.log("error");
        })

    }

    deleteReport(reportId) {
        this.comunicationService.deleteReport(reportId, 
        response => {
            this.refreshReports(reportId);
        }, error => {
            console.log("error:", error);
        })
    }

    componentDidMount() {
        this.getReports();
    }

    showSingleReportDetail(report) {
        this.setModalData(report);
        this.openModal();
    }

    setModalData(report) {
        let date = new Date(report.interviewDate);
        let formatedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.`;
        this.setState({
            name: report.candidateName,
            company: report.companyName,
            date: formatedDate,
            phase: report.phase,
            status: report.status,
            note: report.note,
        });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div className="container">
                <div className="row my-3 justify-content-start">
                    <div className="col col-12 col-md-4 col-lg-3">
                        <Search handleSearch={this.handleSearch}/>
                    </div>
                </div>
                <ReportsList reports={this.state.searchString.length !== 0 ? this.state.filteredReports : this.state.reports} 
                    showSingleReportDetail={this.showSingleReportDetail} handleDelete={this.handleDelete}
                />
                {this.displayModal()}
            </div>

        );
    }

    displayModal() {
        return (

            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                style={modalStyle}
                ariaHideApp={false}
            >

                <div className="container-fluid">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.state.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body row">
                        <div className="col col-12 col-md-5">
                            <div className="row">
                                <div className="col -12" >
                                    <div className="modal-text-label">Company</div>
                                    <div className="modal-text" id="modal-company">{this.state.company}</div>
                                </div>
                                <div className="col-12" >
                                    <div className="modal-text-label">Interwiew Date</div>
                                    <div className="modal-text" id="modal-date">{this.state.date}</div>
                                </div>
                                <div className="col-12" >
                                    <div className="modal-text-label">Phase</div>
                                    <div className="modal-text" id="modal-phase">{this.state.phase}</div>
                                </div>
                                <div className="col-12">
                                    <div className="modal-text-label">Status</div>
                                    <div className="modal-text" id="modal-status">{this.state.status}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-7 modal-text" id="modal-notes">
                            <div className="modal-text-label">Notes</div>
                            <p>{this.state.note}</p>
                        </div>
                    </div>
                </div>

            </Modal>

        );
    }
}