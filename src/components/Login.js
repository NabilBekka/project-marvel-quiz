import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import spiderman from '../images/spiderman.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase/firebaseConfig';

const Login = () => {
    const data = {email:'' ,password:''};
    const [login, setLogin] = useState(data);
    const [error, setError] = useState('');
    const {email, password} = login;
    const navigate = useNavigate();

    useEffect(()=>{
        if (error !== ''){
            setTimeout(()=>{
                setError('');
            },5000);
        }
    },[error]);

    const handleChange = (e) => {
        setLogin({...login, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setLogin({...data});
                setError('');
                navigate('/welcome');

            })
            .catch(e=>{
                setLogin({...data});
                setError({...e, message:"Email et/ou mot de passe incorrect(s)"});
            })
    }

    //La condition pour activer le bouton de connexion
    const connexionBtn = email.includes('@') && password!=='' ? <button className='buttonInscription'>Connexion</button> :
        <button className='buttonInscription' disabled>Connexion</button>

    //On enregistre l'affichage du message d'erreur d'authentification dans une const
    const errorMessage = error !== '' && <span className='error'>{error.message}</span>;

    return (
        <div className="login">
            <img  src={spiderman} alt='ironman' />
            <div className='inscription'>
                {errorMessage}
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit} className='formInscription'>
                    <div>
                      <input value={email} onChange={handleChange} type='email' id='email' required/>
                      <label htmlFor='email'>Email</label>
                    </div>
                    <div>
                      <input value={password} onChange={handleChange} type='password' id='password' required/>
                      <label htmlFor='password'>Mot de passe</label>
                    </div>
                    {connexionBtn}
                </form>
                <div>
                    <Link className='link' to='/signup'>Nouveau sur Marvel Quiz? Inscrivez-vous</Link>
                    <br />
                    <Link className='link' to='/forgetPassword'>Mot de passe oublié?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login