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
    const { question, author, isAnswered } = this.props;
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
                  />
                  <ProgressIndicator
                    text={optionTwo.text}
                    voteA={optionOne.votes.length}
                    voteB={optionTwo.votes.length}
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

const mapStateToProps = ({ auth, users, questions }, { match }) => {
  const { question_id } = match.params;
  const authedUser = users[auth];
  const authorId = questions[question_id].author;
  const author = users[authorId];
  const isAnswered = Object.keys(authedUser.answers).includes(question_id);

  return {
    question: questions[question_id],
    author,
    authedUser: auth,
    isAnswered,
  };
};

export default connect(mapStateToProps)(QuestionPage);
