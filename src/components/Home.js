import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.authedUser}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authedUser: state.users.authedUser,
  };
};

export default connect(mapStateToProps)(Home);
