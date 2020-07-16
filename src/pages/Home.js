import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUser } from "../redux/auth/actions";
import Leaderboard from "./Leaderboard";
import Questions from "./Questions";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import NoMatch from "./NoMatch";
import Nav from "../components/Nav";

class Home extends Component {
  signOut = () => {
    this.props.dispatch(signOutUser());
  };

  render() {
    return (
      <BrowserRouter>
        <div className="main-home-grid">
          <Nav authedUser={this.props.authedUser} signOut={this.signOut} />
          <div className="main-home-container">
            <Switch>
              <Route exact path="/" component={Questions} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/questions/:question_id" component={QuestionPage} />
              <Route path="/questions/something" component={NoMatch} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authedUser: state.auth,
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(Home);
