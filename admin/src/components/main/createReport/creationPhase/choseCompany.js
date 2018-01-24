import React from "react";

export default class ChoseCandidate extends React.Component {
    constructor(props) {
        super(props);

        this.handleCompany = this.handleCompany.bind(this);
    }

    handleCompany () {
        let company = this.props.company;
        let companyData = {
            id: company.id,
            name: company.name,
        }
        this.props.handleChosenCompany(companyData);
    }

    render() {
        let company = this.props.company;

        return (
            <div className={`col col-12 my-1 single-company ${this.props.checkedId === company.id ? "is-checked" : ""}`} onClick={this.handleCompany}>
               {company.name}
            </div>
        );


    }
}