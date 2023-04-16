import { useNavigate } from "react-router-dom"

const Header = () => {
  const toLanding = useNavigate()
  return (
    <header>
        <h1 onClick={()=>toLanding('/')} >MARVEL QUIZ</h1>
    </header>
  )
}

export default Header