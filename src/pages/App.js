import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import SelectUser from "./SelectUser";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div>
          {/* If there is user - redirect to home else be here */}
          {this.props.authedUser === null ? <SelectUser /> : <Home />}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    authedUser: users.authedUser,
  };
};

export default connect(mapStateToProps)(App);
