import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import SelectUser from "./SelectUser";
import Home from "./Home";
import { getInitialData } from "../redux/init-state";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "./NoMatch";

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
          {this.props.auth === null ? (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={SelectUser} />
                <Route exact path="/404" component={NoMatch} />
                <Redirect to="/404" />
              </Switch>
            </BrowserRouter>
          ) : (
            <Home />
          )}
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
