import batman from '../images/batman.png'
const ErrorPage = () => {
  return (
    <div className='errorPage'>
      <h1>Oups, cette page n’existe pas!</h1>
      <img src={batman} alt='batman' />
    </div>
  )
}

export default ErrorPage