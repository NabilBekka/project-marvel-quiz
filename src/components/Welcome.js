import Logout from "./Logout";
import Quiz from "./Quiz";
import { Fragment, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [quiz, setQuiz] = useState(false);
  const [userSession, setUserSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listner = onAuthStateChanged(auth, user => {
      user ? setUserSession(user) : navigate('/');
    })
  
    return listner()
  }, [navigate]);
  

  return ( 
    <div className='welcome'>
      {
        userSession === null ? 
        <Fragment>
          <p>Connexion ...</p>
        </Fragment>
        :<Fragment>
          <Logout />
          {quiz ? <Quiz /> :
            <div className="startDiv">
              <h2>Appuyez sur start pour commencer le quiz</h2>
              <button onClick={()=>setQuiz(true)} className="start">Start</button>
            </div>
          }
        </Fragment>
      }
    </div>
  )
}

export default Welcome