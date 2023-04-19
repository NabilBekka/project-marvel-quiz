import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ironman from '../images/ironman.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, user } from './Firebase/firebaseConfig';
import { setDoc } from 'firebase/firestore';

const Signup = () => {
    const data = {pseudo:'',email:'',password:'',confirmPassword:''};

    const [loginData , setLoginData] = useState(data);
    const [error , setError] = useState('');
    const {pseudo, email, password, confirmPassword} = loginData;
    const navigate = useNavigate();

    const handleChange = (e) => {
      if ((e.target.type==='text')||(e.target.type==='email')){
        setLoginData({...loginData, [e.target.id]:e.target.value.toUpperCase() })
      }else {
        setLoginData({...loginData, [e.target.id]:e.target.value })
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault ();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
          setDoc(user(userCredential.user.uid),{
            pseudo,
            email
          });
          setLoginData({...data});
          setError('');
          navigate('/welcome');
        })
        .catch(error=>{
          setLoginData({...data});
          if (error.message==='Firebase: Error (auth/email-already-in-use).'){
            setError({...error, message:"L'adresse mail est déja utilisée!"});
          }else {
            setError(error);
          }
        }) 
    }

    //La condition pour activer le bouton d'inscription
    const btn = pseudo === '' || email === '' || password.length < 6 || password !== confirmPassword ?
      <button className='buttonInscription' disabled>Inscription</button> :
      <button className='buttonInscription'>Inscription</button> ;
    
    //On enregistre l'affichage du message d'erreur d'authentification dans une const
    const errorMessage = error !== '' && <span className='error'>{error.message}</span>;

    return (
        <div className="signup">
            <img  src={ironman} alt='ironman' />
            <div className='inscription'>
              {errorMessage}
              <h2>Inscription</h2>
              <form onSubmit={handleSubmit} className='formInscription'>
                  <div>
                    <input onChange={handleChange} value={pseudo} type='text' id='pseudo' required/>
                    <label htmlFor='pseudo'>Pseudo</label>
                  </div>
                  <div>
                    <input onChange={handleChange} value={email} type='email' id='email' required/>
                    <label htmlFor='email'>Email</label>
                  </div>
                  <div>
                    <input onChange={handleChange} value={password} type='password' id='password' required/>
                    <label htmlFor='password'>Mot de passe</label>
                  </div>
                  <div>
                    <input onChange={handleChange} value={confirmPassword} type='password' id='confirmPassword' required/>
                    <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
                  </div>
                  {btn}
              </form>
              <div>
                <Link className='link' to='/login'>Déja inscrit? Connectez-vous</Link>
              </div>
            </div>
        </div>
    )
}

export default Signup