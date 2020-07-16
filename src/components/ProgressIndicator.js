import React from "react";

function ProgressIndicator(props) {
  const { text, voteA, voteB, isA, vote } = props;

  const totalVotes = voteA + voteB;
  return (
    <div className={vote ? "progress-item-active" : "progress-item"}>
      {vote ? (
        <div className="voted-item">
          Your Vote
        </div>
      ) : (
        ""
      )}
      {text}
      <p style={{ fontSize: 14 }}>
        {isA
          ? `${voteA} out of ${totalVotes} vote(s)`
          : `${voteB} out of ${totalVotes} vote(s)`}
      </p>
    </div>
  );
}

export default ProgressIndicator;
