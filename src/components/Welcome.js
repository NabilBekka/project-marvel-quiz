import Logout from "./Logout";
import Quiz from "./Quiz";
import { useState } from "react";

const Welcome = () => {
  const [quiz, setQuiz] = useState(false);

  return (
    <div className='welcome'>
      <Logout />
      {quiz ? <Quiz /> :
        <div className="startDiv">
          <h2>Appuyez sur start pour commencer le quiz</h2>
          <button onClick={()=>setQuiz(true)} className="start">Start</button>
        </div>
      }
    </div>
  )
}

export default Welcome