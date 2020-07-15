import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderboardItem from "../components/LeaderboardItem";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
        {this.props.userIds.map((user) => {
          return (
            <LeaderboardItem key={user} id={user}>
              {user}
            </LeaderboardItem>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    authedUser: users.authedUser,
    userIds: Object.keys(users).sort(
      (a, b) => users[b].name - users[a].name
    ),
  };
};

export default connect(mapStateToProps)(Leaderboard);
