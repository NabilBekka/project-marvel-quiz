import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const [classLanding, setClassLanding] = useState('landing')
  const [displayBtn, setDisplayBtn] = useState(false)

  const toSignup = useNavigate()
  const toLogin = useNavigate()

  useEffect(()=>{
    setClassLanding('landing startingImg')
    setTimeout(()=>{
      setClassLanding('landing')
      setDisplayBtn(true)
    }, 1000)
  },[])

  const handleMouseClear = () => {
    setClassLanding('landing')
  }
  const handleMouseLeft = (e) => {
    e.stopPropagation()
    setClassLanding('landing leftImg')
  }
  const handleMouseRight = (e) => {
    e.stopPropagation()
    setClassLanding('landing rightImg')
  }

  return (
    <div className={classLanding}>
      {displayBtn && <Fragment>
        <div onMouseOut={handleMouseClear} onMouseOver={handleMouseLeft} className='signupButton'>
          <button onClick={()=>toSignup('signup')} >Inscription</button>
        </div>
        <div onMouseOut={handleMouseClear} onMouseOver={handleMouseRight} className='loginButton'>
          <button onClick={()=>toLogin('login')} >Connexion</button>
        </div>
      </Fragment>}
    </div>
  )
}

export default Landing