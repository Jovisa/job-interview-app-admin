import React from "react";
import Header from "../common/header";
import Main from "./main/main";


class App extends React.Component {
    render() {
        return (
          <div className="bg">
            <Header/>
            <Main/>
          </div>
        );
      }
}

export default App;