import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import deadpool from '../images/deadpool.png'
const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const toSignup = useNavigate();

    //La condition pour activer le bouton de connexion
    const recoverBtn = email.includes('@')? <button className='buttonInscription'>Récupérer</button> :
        <button className='buttonInscription' disabled>Récupérer</button>

    return (
        <div className="login">
            <img  src={deadpool} alt='ironman' />
            <div className='inscription'>
                <h2>Mot de passe oublié?</h2>
                <form className='formInscription'>
                    <div>
                      <input value={email} onChange={e=>setEmail(e.target.value)} type='email' id='email' required/>
                      <label htmlFor='email'>Email</label>
                    </div>
                    {recoverBtn}
                </form>
                <div>
                    <p className='link' onClick={()=>toSignup('../signup')} >Nouveau sur Marvel Quiz? Inscrivez-vous</p>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword