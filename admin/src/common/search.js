import React from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props)

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        let searchString = e.target.value;
        this.props.handleSearch(searchString);
    }
       
    render() {
        return(
            <input type="text" onKeyUp={this.handleUserInput}/>
        );
    }
}