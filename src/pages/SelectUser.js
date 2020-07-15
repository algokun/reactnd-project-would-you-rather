import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/auth/actions";

class SelectUser extends Component {
  state = {
    active: "richard",
  };

  selectUser = (user) => {
    this.setState({
      active: user.name,
    });
  };

  signInUser = () => {
    this.props.dispatch(loginUser(this.state.active));
  };

  render() {
    if (this.props.loading)
      return (
        <div>
          <p>Loading</p>
        </div>
      );

    return (
      <div className="container">
        <span className="heading">Welcome to Would You Rather?</span>
        <p>Please select user to continue</p>
        <div className="select-user-grid">
          {Object.keys(this.props.users).map((keyName, i) => (
            <div
              className="select-user-item"
              onClick={() => this.selectUser(this.props.users[keyName])}
              key={keyName}
            >
              <img
                alt="user-avatar"
                src={this.props.users[keyName].avatar}
                className={
                  this.props.users[keyName].name === this.state.active
                    ? "select-user-avatar active-user-avatar"
                    : "select-user-avatar"
                }
              />
              <p className="select-user-avatar-name">
                {this.props.users[keyName].name}
              </p>
            </div>
          ))}
        </div>
        {/* <p>All these images are from <a href="">dribbble</a></p> */}
        <button
          style={{
            width: "20rem",
          }}
          className="primary-cta"
          onClick={this.signInUser}
        >{`Continue as ${this.state.active}`}</button>
      </div>
    );
  }
}

const mapStateToProps = ({ loadingBar, users }) => {
  return {
    users,
    loading: loadingBar.default,
  };
};

export default connect(mapStateToProps)(SelectUser);
