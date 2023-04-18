import { signOut } from "firebase/auth";
import { auth } from './Firebase/firebaseConfig';
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const Logout = memo(() => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        signOut (auth).then(()=>{
            navigate('/');
          })
          .catch(e=>{
            alert(e);
          })
    }

    return (
        <div className="deconnexion">
            <button onClick={handleLogout} >Déconnexion</button>
        </div>
    )
  });

export default Logout;