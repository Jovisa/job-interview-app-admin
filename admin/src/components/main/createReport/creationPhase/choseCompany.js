import React from "react";

export default class ChoseCandidate extends React.Component {
    constructor(props) {
        super(props);

        this.handleCompany = this.handleCompany.bind(this);
    }

    handleCompany () {
        let company = this.props.company;
        let companyData = {
            companyId: company.id,
            companyName: company.name,
        }

        this.props.handleCompanyData(companyData);
    }

    render() {
        let company = this.props.company;

        return (
            <div className="col col-12 my-1" onClick={this.handleCompany}>
               {company.name}
            </div>
        );


    }
}