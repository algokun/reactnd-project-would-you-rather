import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../redux/questions/actions/actions";
import QuestionItem from "../components/QuestionItem";

class Questions extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  state = {
    active: "Answered",
    items: [
      {
        name: "Answered",
      },
      {
        name: "Unanswered",
      },
    ],
  };

  changeTab = (item) => {
    this.setState({
      active: item,
    });
  };

  render() {
    const isAnswered = this.state.active === "Answered";

    if (this.props.loading)
      return (
        <div>
          <p>Loading</p>
        </div>
      );

    return (
      <div>
        <h1>Home</h1>
        <nav className="tab-link">
          {this.state.items.map((item) => (
            <div
              key={item.name}
              className={
                item.name === this.state.active
                  ? "tab-link-item-active"
                  : "tab-link-item"
              }
              onClick={() => this.changeTab(item.name)}
            >
              {item.name}
            </div>
          ))}
        </nav>
        <div className="questions">
          {isAnswered
            ? this.props.answeredQuestions.map((question) => (
                <QuestionItem
                  key={question}
                  isAnswered={isAnswered}
                  id={question}
                />
              ))
            : this.props.unansweredQuestions.map((question) => (
                <QuestionItem
                  key={question}
                  isAnswered={isAnswered}
                  id={question}
                />
              ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loadingBar, questions, users }) => {
  const { authedUser } = users;
  const totalQuestions = Object.keys(questions.questions).sort(
    (a, b) =>
      questions.questions[b].timestamp - questions.questions[a].timestamp
  );
  const answeredQuestions = Object.keys(users.users[authedUser].answers);
  return {
    authedUser: users.users[authedUser],
    loadingBar: loadingBar.default,
    answeredQuestions,
    unansweredQuestions: totalQuestions.filter(
      (e) => !answeredQuestions.includes(e)
    ),
  };
};

export default connect(mapStateToProps)(Questions);
