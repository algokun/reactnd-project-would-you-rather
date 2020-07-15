import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderboardItem extends Component {
  render() {
    const { id, name, avatar, questions, answers } = this.props.user;
    const answeredQuestions = Object.keys(answers).length;
    const createdQuestions = questions.length;
    const totalPoints = answeredQuestions + createdQuestions;
    return (
      <div>
        <img src={avatar} className="select-user-avatar" alt={id} />
        <h3>{name}</h3>
        <p>Answered Questions : {answeredQuestions}</p>
        <p>Created Questions : {createdQuestions}</p>
        <p>Total Points : {totalPoints}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ users }, { id }) => {
  return {
    user: users.users[id],
  };
};

export default connect(mapStateToProps)(LeaderboardItem);
