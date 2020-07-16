import React, { Component } from "react";
import { connect } from "react-redux";
import ProgressIndicator from "../components/ProgressIndicator";
import { handleSaveQuestionAnswer } from "../redux/users/actions";

class QuestionPage extends Component {
  handlePoll = (option) => {
    const { authedUser, question } = this.props;

    this.props.dispatch(
      handleSaveQuestionAnswer(authedUser, question.id, option)
    );
  };

  render() {
    const { isNotExists, history } = this.props;
    if (isNotExists) {
      history.push("/404");
      return null;
    }
    const { question, author, isAnswered, vote } = this.props;
    const { name, avatar } = author;
    const { optionOne, optionTwo } = question;

    return (
      <div>
        <div className="question-item">
          <div className="question-item-author">{name} asks</div>
          <div className="question-item-content">
            <div>
              <img src={avatar} alt="avatar" className="select-user-avatar" />
            </div>
            <span className="vertical-hr" />
            <div>
              <span className="title">Would you rather</span>
              {isAnswered ? (
                <div>
                  <ProgressIndicator
                    text={optionOne.text}
                    isA={true}
                    voteA={optionOne.votes.length}
                    voteB={optionTwo.votes.length}
                    vote={vote === "optionOne"}
                  />
                  <ProgressIndicator
                    text={optionTwo.text}
                    voteA={optionOne.votes.length}
                    voteB={optionTwo.votes.length}
                    vote={vote === "optionTwo"}
                    isA={false}
                  />
                </div>
              ) : (
                <div>
                  <button
                    className="secondary-cta"
                    onClick={() => this.handlePoll("optionOne")}
                  >
                    {optionOne.text}
                  </button>
                  <button
                    className="secondary-cta"
                    onClick={() => this.handlePoll("optionTwo")}
                  >
                    {optionTwo.text}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, users, questions }, { match, history }) => {
  const { question_id } = match.params;
  const question = questions[question_id];

  if (!question) {
    return {
      isNotExists: true,
    };
  }

  const authedUser = users[auth];
  const isAnswered = Object.keys(authedUser.answers).includes(question_id);

  const authorId = questions[question_id].author;
  const author = users[authorId];

  return {
    question,
    author,
    authedUser: auth,
    isAnswered,
    isNotExists: false,
    vote: isAnswered ? authedUser.answers[question_id] : "",
  };
};

export default connect(mapStateToProps)(QuestionPage);
