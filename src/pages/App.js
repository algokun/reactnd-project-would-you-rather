import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import SelectUser from "./SelectUser";
import Home from "./Home";
import { getInitialData } from "../redux/init-state";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div>
          {/* If there is user - redirect to home else be here */}
          {this.props.auth === null ? <SelectUser /> : <Home />}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(App);
