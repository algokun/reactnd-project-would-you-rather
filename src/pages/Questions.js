import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionItem from "../components/QuestionItem";

class Questions extends Component {
  state = {
    active: "Unanswered",
    items: [
      {
        name: "Unanswered",
      },
      {
        name: "Answered",
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

const mapStateToProps = ({ auth, loadingBar, questions, users }) => {
  const totalQuestions = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const answeredQuestions = Object.keys(users[auth].answers);
  return {
    authedUser: users[auth],
    loadingBar: loadingBar.default,
    answeredQuestions,
    unansweredQuestions: totalQuestions.filter(
      (e) => !answeredQuestions.includes(e)
    ),
  };
};

export default connect(mapStateToProps)(Questions);
