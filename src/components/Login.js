import { useNavigate } from 'react-router-dom'
import spiderman from '../images/spiderman.png'

const Login = () => {
    const toSignup = useNavigate()
    return (
        <div className="login">
            <img  src={spiderman} alt='ironman' />
            <div className='inscription'>
                <h2>Inscription</h2>
                <form className='formInscription'>
                    <div>
                      <label htmlFor='email'>Email</label>
                      <input type='email' id='email' name='email' required/>
                    </div>
                    <div>
                      <label htmlFor='password'>Mot de passe</label>
                      <input type='password' id='password' name='password' required/>
                    </div>
                    <button className='buttonConnexion'>Connexion</button>
                </form>
                <p onClick={()=>toSignup('../signup')} >Nouveau sur Marvel Quiz? Inscrivez-vous</p>
            </div>
        </div>
    )
}

export default Login