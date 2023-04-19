import Logout from "./Logout";
import Quiz from "./Quiz";
import { Fragment, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, user } from "./Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getDoc } from "firebase/firestore";

const Welcome = () => {
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const listner = onAuthStateChanged(auth, user => {
      user ? setUserSession(user) : navigate('/');
    });

    if (!!userSession){
      const colRef = user(userSession.uid);
      getDoc(colRef)
        .then(snapshot => {
          if (snapshot.exists()){
            setUserData(snapshot.data());
          }
        })
        .catch(error => console.log(error));
    }
  
    return listner()
  }, [navigate, userSession]);

  return ( 
    <div className='welcome'>
      {
        userSession === null ? 
        <Fragment>
          <p>Connexion ...</p>
        </Fragment>
        :<Fragment>
          <Logout />
          <Quiz userData={userData} />
        </Fragment>
      }
    </div>
  )
}

export default Welcome