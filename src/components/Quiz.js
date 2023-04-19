import { useCallback, useState } from "react"
import Level from "./Level"
import ProgressBar from "./ProgressBar"

const Quiz = ({userData}) => {
  const [level, setLevel] = useState(1);
  const [inProgress, setInProgress] = useState(true);

  const handleLevel = useCallback(()=>{
    if(level <4){
      setLevel(l=>l+1);
      setInProgress(true);
    }
  },[level]);

  return (
    <div className="quiz">
      <h3 >Bonjour {userData.pseudo}</h3>
      <Level level={level} inProgress={inProgress} handleLevel={handleLevel}/>
      <ProgressBar />
    </div>
  )
}

export default Quiz