import React from "react";

function ProgressIndicator(props) {
  const { text, voteA, voteB, isA } = props;
  const totalVotes = voteA + voteB;
  return (
    <div className="progress-item">
      {text}
      {/* TODO: add progess */}
      <p style={{ fontSize: 14 }}>
        {isA
          ? `${voteA} out of ${totalVotes}(s)`
          : `${voteB} out of ${totalVotes}(s)`}
      </p>
    </div>
  );
}

export default ProgressIndicator;
