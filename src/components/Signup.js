import { useNavigate } from 'react-router-dom'
import ironman from '../images/ironman.png'

const Signup = () => {
    const toLogin = useNavigate()
    return (
        <div className="signup">
            <img  src={ironman} alt='ironman' />
            <div className='inscription'>
                <h2>Inscription</h2>
                <form className='formInscription'>
                    <div>
                      <input type='text' id='pseudo' name='pseudo' required/>
                      <label htmlFor='pseudo'>Pseudo</label>
                    </div>
                    <div>
                      <input type='email' id='email' name='email' required/>
                      <label htmlFor='email'>Email</label>
                    </div>
                    <div>
                      <input type='password' id='password' name='password' required/>
                      <label htmlFor='password'>Mot de passe</label>
                    </div>
                    <div>
                      <input type='password' id='confirmPassword' name='password' required/>
                      <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
                    </div>
                    
                    <button className='buttonInscription'>Inscription</button>
                </form>
                <div>
                    <p className='link' onClick={()=>toLogin('../login')} >Déja inscrit? Connectez-vous</p>
                </div>
            </div>
        </div>
    )
}

export default Signup