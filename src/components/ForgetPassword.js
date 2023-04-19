import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import deadpool from '../images/deadpool.png'
import { auth } from './Firebase/firebaseConfig';
const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then (()=>{
                setError(null);
                setSuccess(`Un email de réinitialisation a été envoyé à ${email}`);
                setEmail('');
                setTimeout(()=>{
                    navigate('/login');
                }, 7000);
            })
            .catch(error=>{
                setError(error);
                setEmail('');
            })
    }

    //La condition pour activer le bouton de connexion
    const recoverBtn = email.includes('@')? <button className='buttonInscription'>Récupérer</button> :
        <button className='buttonInscription' disabled>Récupérer</button>

    return (
        <div className="login">
            <img  src={deadpool} alt='ironman' />
            <div className='inscription'>
                {success && <span className='success'>{success}</span>}
                {error && <span className='error'>{error.message}</span>}
                <h2>Mot de passe oublié?</h2>
                <form onSubmit={handleSubmit} className='formInscription'>
                    <div>
                      <input value={email} onChange={e=>setEmail(e.target.value)} type='email' id='email' required/>
                      <label htmlFor='email'>Email</label>
                    </div>
                    {recoverBtn}
                </form>
                <div>
                    <Link className='link' to='/signup'>Nouveau sur Marvel Quiz? Inscrivez-vous</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword