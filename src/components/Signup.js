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
                      <label htmlFor='pseudo'>Pseudo</label>
                      <input type='text' id='pseudo' name='pseudo' required/>
                    </div>
                    <div>
                      <label htmlFor='email'>Email</label>
                      <input type='email' id='email' name='email' required/>
                    </div>
                    <div>
                      <label htmlFor='password'>Mot de passe</label>
                      <input type='password' id='password' name='password' required/>
                    </div>
                    <div>
                      <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
                      <input type='password' id='confirmPassword' name='password' required/>
                    </div>
                    
                    <button className='buttonInscription'>Inscription</button>
                </form>
                <p onClick={()=>toLogin('../login')} >Déja inscrit? Connectez-vous</p>
            </div>
        </div>
    )
}

export default Signup