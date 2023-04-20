import { useCallback, useState } from "react"
import Level from "./Level"
import ProgressBar from "./ProgressBar"

const Quiz = ({userData}) => {
  const [level, setLevel] = useState(1);
  const [inProgress, setInProgress] = useState(true);
  const [question, setQuestion] = useState(1);

  const handleLevel = ()=>{
    if(level <4){
      setLevel(l=>l+1);
    }
    setInProgress(false);
  }

  const handleFinish = useCallback (()=>{
    setInProgress(true);
    setQuestion(1);
  },[])

  const handleQuestion = () => {
    setQuestion(q=>q+1);
  }

  const btn = question < 10 ? <button onClick={handleQuestion}>Suivant</button> : 
              <button onClick={handleLevel}>Terminer</button>;

  return (
    <div className="quiz">
      {userData.pseudo && <h3 >Bonjour {userData.pseudo}</h3>}
      <Level level={level} inProgress={inProgress} handleFinish={handleFinish}/>
      <ProgressBar question={question} inProgress={inProgress}/>
      {inProgress && btn}
    </div>
  )
}

export default Quiz