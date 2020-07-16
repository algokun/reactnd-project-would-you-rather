import React from "react";
import { Line } from 'rc-progress';

function ProgressIndicator(props) {
  const { text, voteA, voteB, isA, vote } = props;

  const totalVotes = voteA + voteB;
  const percentage = ( (isA ? voteA : voteB) / totalVotes ) * 100
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
      <Line percent={percentage} strokeWidth="4" strokeColor="#faae2b" />
      <p style={{ fontSize: 14 }}>
        {isA
          ? `${voteA} out of ${totalVotes} vote(s)`
          : `${voteB} out of ${totalVotes} vote(s)`}
      </p>
    </div>
  );
}

export default ProgressIndicator;
