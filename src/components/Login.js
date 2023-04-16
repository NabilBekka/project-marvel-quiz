import { useNavigate } from 'react-router-dom'
import spiderman from '../images/spiderman.png'

const Login = () => {
    const toSignup = useNavigate()
    return (
        <div className="login">
            <img  src={spiderman} alt='ironman' />
            <div className='inscription'>
                <h2>Connexion</h2>
                <form className='formInscription'>
                    <div>
                      <input type='email' id='email' name='email' required/>
                      <label htmlFor='email'>Email</label>
                    </div>
                    <div>
                      <input type='password' id='password' name='password' required/>
                      <label htmlFor='password'>Mot de passe</label>
                    </div>
                    <button className='buttonConnexion'>Connexion</button>
                </form>
                <div>
                    <p className='link' onClick={()=>toSignup('../signup')} >Nouveau sur Marvel Quiz? Inscrivez-vous</p>
                    <p className='link' onClick={()=>toSignup('../forgetPassword')} >Mot de passe oublié?</p>
                </div>
            </div>
        </div>
    )
}

export default Login