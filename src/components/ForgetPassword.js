import { useNavigate } from 'react-router-dom'
import deadpool from '../images/deadpool.png'
const ForgetPassword = () => {
    const toSignup = useNavigate()
    return (
        <div className="login">
            <img  src={deadpool} alt='ironman' />
            <div className='inscription'>
                <h2>Mot de passe oublié?</h2>
                <form className='formInscription'>
                    <div>
                      <input type='email' id='email' name='email' required/>
                      <label htmlFor='email'>Email</label>
                    </div>
                    <button className='buttonConnexion'>Récupérer</button>
                </form>
                <div>
                    <p className='link' onClick={()=>toSignup('../signup')} >Nouveau sur Marvel Quiz? Inscrivez-vous</p>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword