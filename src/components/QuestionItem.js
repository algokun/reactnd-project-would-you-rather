import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class QuestionItem extends Component {
  render() {
    const { name, avatar } = this.props.author;
    const { id, optionOne, optionTwo } = this.props.question;
    const { isAnswered } = this.props;
    return (
      <div className="question-item">
        <div className="question-item-author">{name} asks</div>
        <div className="question-item-content">
          <div>
            <img src={avatar} alt="avatar" className="select-user-avatar" />
          </div>
          <span className="vertical-hr" />
          <div>
            <span className="title">Would you rather</span>
            <p
              style={{
                fontSize: 14,
              }}
            >
              {optionOne.text}
            </p>
            <p
              style={{
                fontSize: 14,
              }}
            >
              {optionTwo.text}
            </p>
            <Link className="poll-btn" to={`questions/${id}`}>
              {!isAnswered ? "Answer" : "View Results"}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions }, { id }) => {
  const questionItem = questions[id];
  let { author } = questionItem;
  author = users[author];

  return {
    question: questionItem,
    author,
  };
};

export default connect(mapStateToProps)(QuestionItem);
