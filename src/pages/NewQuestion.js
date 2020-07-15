import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../redux/questions/actions";

class NewQuestion extends Component {
  addQuestion = () => {
    const { auth } = this.props;

    console.log(auth);

    this.props.dispatch(
      handleSaveQuestion("Be billgates", "Be Jeff bezos", auth)
    );
  };

  render() {
    return (
      <div>
        <h1>Add a new Question</h1>
        <button className="primary-cta" onClick={this.addQuestion}>
          Add
        </button>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(NewQuestion);
