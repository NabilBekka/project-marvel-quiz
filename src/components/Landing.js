import { useNavigate } from 'react-router-dom'
import wolverine from '../images/wolverine.png'

const Landing = () => {
  const toSignup = useNavigate()
  const toLogin = useNavigate()
  return (
    <div className='landing'>
      <button className='signupButton' onClick={()=>toSignup('signup')} >Inscription</button>
      <img src={wolverine} alt='wolverine' />
      <button className='loginButton' onClick={()=>toLogin('login')} >Connexion</button>
    </div>
  )
}

export default Landing