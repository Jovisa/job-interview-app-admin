
import React from "react";
import { Link } from "react-router-dom";
import ComunicationService from "../../../../services/comunicationService";
import ChoseCompany from "./choseCompany";
import Search from "../../../../common/search";

export default class Company extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [],
            filteredCompanies: [],
            name: "",
            id: "",
            searchString: "",
            isChecked: false,
        };

        this.comunicationService = new ComunicationService();
        this.handleCompanyData = this.handleCompanyData.bind(this);
        this.handleChosenCompany = this.handleChosenCompany.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.setSearchData = this.setSearchData.bind(this);
        this.filterCompanies = this.filterCompanies.bind(this);
        this.nothingFound = this.nothingFound.bind(this);
    }

    nothingFound() {
        return (
            <div className="col col-12">
                Nothing Found
            </div>
        );
    }

    filterCompanies(searchString) {
        let companies = this.state.companies;
        let string = searchString.toLowerCase();
        let filteredCompanies = []
        filteredCompanies = companies.filter(company =>
            company.name.toLowerCase().includes(string)
        );
        this.setState({ filteredCompanies: filteredCompanies });
    }

    setSearchData(searchString) {
        this.setState({
            searchString: searchString
        });
    }

    handleSearch(searchString) {
        this.setSearchData(searchString);
        this.filterCompanies(searchString);
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

    handleCompanyData() {
        const companyData = {
            id: this.state.id,
            name: this.state.name,
           
        }
        this.props.handleCompanyData(companyData);
    }

    handleChosenCompany(companyData) {
        this.setState({
            id: companyData.id,
            name: companyData.name,
            isChecked: true,
        })
    }


    render() {
        let companies = this.state.searchString.length !== 0 ? this.state.filteredCompanies : this.state.companies;
        let companiesList;

        if (companies.length) {
            companiesList = companies.map(company => {
                return (
                    <ChoseCompany key={company.id} company={company} checkedId={this.state.id} handleChosenCompany={this.handleChosenCompany} />
                );
            });
        } else {
            companiesList = this.nothingFound()
        }

        return (
            <div className="container">
                <div className="row my-3 justify-content-end">
                    <div className="col col-12 col-md-4 col-lg-3">
                        <Search handleSearch={this.handleSearch} />
                    </div>
                </div>
                <div className="row">
                    {companiesList}
                </div>
                <div className="row justify-content-between">
                    <div className="col col-3 col-md-2 text-left my-3">
                        <Link to="/create-report" className="btn btn-success"> BACK </Link>
                    </div>
                    <div className="col col-3 col-md-2 text-right my-3">
                        <Link to="/create-report/report" onClick={this.handleCompanyData} className={`btn btn-success ${this.state.isChecked ? "" : "disabled"}`}> NEXT </Link>
                    </div>
                </div>

            </div>
        );
    }
}