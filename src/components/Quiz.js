import { Fragment, useCallback, useEffect, useState } from "react"
import Level from "./Level"
import ProgressBar from "./ProgressBar"
import Test from "./Test";

const Quiz = ({userData}) => {
  const [level, setLevel] = useState(1);
  const [inProgress, setInProgress] = useState(true);
  const [question, setQuestion] = useState(1);
  const [success, setSuccess] = useState(false);
  const [result, setResults] = useState(0);

  useEffect (()=>{
    if (result >= 7){
      setSuccess(true);
    }
  },[result]);

  const handleLevel = useCallback((answer)=>{
    if (answer){
      setResults(r=>r+1);
    }
    setInProgress(false);
  },[]);

  const handleFinish = useCallback (()=>{
    if (success){
      setLevel(l=>l+1);
    }
    setInProgress(true);
    setQuestion(1);
    setResults(0);
    setSuccess(false);
  },[success]);

  const handleQuestion = useCallback((answer) => {
    if (answer){
      setResults(r=>r+1);
    }
    setQuestion(q=>q+1);
  },[]);

  return (
    <div className="quiz">
      {userData.pseudo && <h3 >Bonjour {userData.pseudo}</h3>}
      <Level level={level} inProgress={inProgress} handleFinish={handleFinish} success={success}/>
      
      {level < 4 ? <Fragment>
            <ProgressBar question={question} inProgress={inProgress} result={result} />
            <Test inProgress={inProgress} level={level} question={question}
            handleQuestion={handleQuestion} handleLevel={handleLevel} /> 
        </Fragment>:
        <div></div>
      }
    </div>
  )
}

export default Quiz