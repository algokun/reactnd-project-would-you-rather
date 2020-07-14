import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/users/actions/actions";

class SelectUser extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  state = {
    active: "richard",
  };

  selectUser = (user) => {
    this.setState({
      active: user.name,
    });
  };

  render() {
    return (
      <div className="container">
        <span className="heading">Welcome to Would You Rather?</span>
        <p>Please select user to continue</p>
        <div className="select-user-grid">
          {!(Object.keys(this.props.users).length === 0) &&
            Object.keys(this.props.users).map((keyName, i) => (
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
        <button className="primary-cta">{`Continue as ${this.state.active}`}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(SelectUser);
