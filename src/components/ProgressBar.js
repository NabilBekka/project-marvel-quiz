const ProgressBar = ({question, result, inProgress, level}) => {
  const progressStyle = 99 - (question*9.8);
  return (
    <div className="progressBar">
      {inProgress ? 
        <div className="progress">
          <div>Question: {question}/10</div>
          <div>Progression: {question}0%</div>
        </div> :
        <div className="progress">
          <div>Réussite: {result}0%</div>
          <div>Note: {result}/10</div>
        </div>
      }
      {inProgress && <div className="bar">
        <div style={{right: `${progressStyle}%`}}></div>
      </div>}
    </div>
  )
}

export default ProgressBar;