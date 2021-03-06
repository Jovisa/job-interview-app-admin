import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {

    render() {
        return (
            <header className="bg-primary">
                <nav>
                    <div className="container-fluid">
                        <div className="row justify-content-between align-items-baseline">
                            <div className="col col-12 col-md-4 col-lg-3  text-center text-white">
                                <h4 className="mt-3 mb-3">Reports Administration</h4>
                            </div>
                            <div className="col col-12 col-md-4 col-lg-3  text-center">
                                <div className="row justify-content-cente">

                                    <div className="col-4 col-md-5 mr-1">
                                        <Link to="/" className="btn btn-success my-2 my-sm-0" >
                                            Reports
						                </Link>
                                    </div>

                                    <div className="col-5 col-md-6">
                                    <Link to="/create-report" className="btn btn-success my-2 my-sm-0">
                                            Create Report
						                </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}