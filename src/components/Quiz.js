import { Fragment, useCallback, useEffect, useState } from "react"
import Level from "./Level"
import ProgressBar from "./ProgressBar"
import Test from "./Test";
import Answers from "./Answers";

const Quiz = ({userData}) => {
  const [level, setLevel] = useState(1);
  const [inProgress, setInProgress] = useState(true);
  const [question, setQuestion] = useState(1);
  const [success, setSuccess] = useState(false);
  const [result, setResults] = useState(0);

  useEffect (()=>{
    if (result >= 7){
      setSuccess(true);
      if (level===3){
        setLevel(4);
      }
    }
  },[result, level]);

  // Gerer par le bouton "Terminer"
  const handleLevel = useCallback((correctAnswer)=>{
    // Dans le cas ou le test est fini, on incrémente le niveau depuis le bouton terminer
    
    if (correctAnswer){
      setResults(r=>r+1);
    }
    setInProgress(false);
  },[]);

  //Gerer par les boutons "Niveau suivant" et "Réessayer"
  const handleFinish = useCallback (()=>{
    if (success){
      setLevel(l=>l+1);
    }
    setInProgress(true);
    setQuestion(1);
    setResults(0);
    setSuccess(false);
  },[success]);

  //Gerer par le bouton "Suivant"
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
      
      {level < 4 && <Fragment>
            <ProgressBar question={question} inProgress={inProgress} result={result} />
            {inProgress ? <Test level={level} question={question} handleQuestion={handleQuestion} handleLevel={handleLevel} /> :
            success && <Answers level={level} />}
        </Fragment>
      }
      {level===4 && <Fragment>
          <ProgressBar result={result} level={level}/> 
          <Answers level={level} /> 
        </Fragment>
      }
    </div>
  )
}

export default Quiz;