import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import SelectUser from "./SelectUser";
import { getInitialData } from "../redux/init-state";
import { signOutUser } from "../redux/auth/actions";
import Leaderboard from "./Leaderboard";
import Questions from "./Questions";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import NoMatch from "./NoMatch";
import Nav from "../components/Nav";
import { Route, BrowserRouter, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  signOut = () => {
    this.props.dispatch(signOutUser());
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <LoadingBar />
          {this.props.auth === null ? (
            <Route render={() => <SelectUser />} />
          ) : (
            <div className="main-home-grid">
              <Nav authedUser={this.props.auth} signOut={this.signOut} />
              <div className="main-home-container">
                <Switch>
                  <Route exact path="/" component={Questions} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/add" component={NewQuestion} />
                  <Route
                    path="/questions/:question_id"
                    component={QuestionPage}
                  />
                  <Route path="/questions/something" component={NoMatch} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(App);
