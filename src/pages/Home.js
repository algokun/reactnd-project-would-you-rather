import React, { Component } from "react";
import { Route, BrowserRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUser } from "../redux/auth/actions";
import Leaderboard from "./Leaderboard";
import Questions from "./Questions";
import NewQuestion from "./NewQuestion";

class Home extends Component {
  signOut = () => {
    this.props.dispatch(signOutUser());
  };

  render() {
    return (
      <BrowserRouter>
        <div className="main-home-grid">
          <div className="nav">
            <span className="heading">
              Welcome,
              <br /> {this.props.authedUser}
            </span>
            <div className="nav-links">
              <NavLink
                activeClassName="nav-link-active"
                exact
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="nav-link-active"
                to="/leaderboard"
                className="nav-link"
              >
                Leaderboard
              </NavLink>
              <NavLink
                activeClassName="nav-link-active"
                to="/new"
                className="nav-link"
              >
                New Question
              </NavLink>
            </div>
            <button onClick={this.signOut} className="secondary-cta">
              Signout
            </button>
          </div>
          <div className="main-home-container">
            <Route exact path="/" component={Questions} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/new" component={NewQuestion} />
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
