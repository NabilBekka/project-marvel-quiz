import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const [classLanding, setClassLanding] = useState('')

  const toSignup = useNavigate()
  const toLogin = useNavigate()

  const handleMouse = () => {
    setClassLanding('')
  }
  const handleMouseLeft = (e) => {
    e.stopPropagation()
    setClassLanding('leftImg')
  }
  const handleMouseRight = (e) => {
    e.stopPropagation()
    setClassLanding('rightImg')
  }

  return (
    <div onMouseOver={handleMouse} className={`landing ${classLanding}`}>
      <button onMouseOver={handleMouseLeft} className='signupButton' onClick={()=>toSignup('signup')} >Inscription</button>
      <button onMouseOver={handleMouseRight} className='loginButton' onClick={()=>toLogin('login')} >Connexion</button>
    </div>
  )
}

export default Landing