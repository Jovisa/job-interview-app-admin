
import React from "react";
import { Link } from "react-router-dom";
import ComunicationService from "../../../../services/comunicationService";
import ChoseCompany from "./choseCompany";

export default class Company extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [],
        };

        this.comunicationService = new ComunicationService();
        this.handleCompanyData = this.handleCompanyData.bind(this);
    }

    getCompanies() {
        this.comunicationService.fetchCompanies(companiesData => {
            this.setState({
                companies: companiesData,
            });
            
        }, error => {
            console.log("error");
        })

    }

    componentDidMount() {
        this.getCompanies();
    }

    handleCompanyData (companyData) {
        this.props.handleCompanyData(companyData);
    }


    render() {
        let companiesList = this.state.companies.map(company => {
            return (
                <ChoseCompany key={company.id} company={company} handleCompanyData={this.handleCompanyData} />
            );
        })

        return (
            <div className="container">
                <div className="row">
                    <h1>Company</h1>
                </div>
                <div className="row">
                    {companiesList}
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/create-report"> BACK </Link>
                    </div>
                    <div className="col">
                        <Link to="/create-report/report" onClick={this.handleCompanyData}> NEXT </Link>
                    </div>
                </div>

            </div>
        );
    }
}