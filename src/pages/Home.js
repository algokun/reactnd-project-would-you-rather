import React, { Component } from "react";
import { Route, BrowserRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../redux/users/actions/actions";
import Leaderboard from "./Leaderboard";

class Home extends Component {
  signOut = () => {
    this.props.dispatch(signOut());
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
            <Route exact path="/">
              <h1> Home</h1>
            </Route>
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/new">
              <h1>new</h1>
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authedUser: state.users.authedUser,
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(Home);
