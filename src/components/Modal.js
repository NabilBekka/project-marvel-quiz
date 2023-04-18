import { useEffect } from "react"
import { createPortal } from "react-dom";

const Modal = ({children, exit}) => {
  const modalWindow = document.createElement('div');

  useEffect (()=>{
    document.body.appendChild(modalWindow);
    return ()=>{
      document.body.removeChild(modalWindow);
    }
  },[modalWindow]);


  return createPortal(
    <div onClick={exit} className="modal">
        <div onClick={e=>e.stopPropagation()}>
          {children}
          <button onClick={exit}>x</button>
        </div>
    </div>, modalWindow)
}

export default Modal

// import { Component } from 'react'
// import { createPortal } from 'react-dom';

// class Modal extends Component {
//   constructor(props) {
//     super(props)
//     this.modalWindow = document.createElement('div')
//   }
//   componentDidMount(){
//     document.body.appendChild(this.modalWindow)
//   }
//   componentWillUnmount(){
//     document.body.removeChild(this.modalWindow)
//   }
//   handleClick = (e) => {
//     e.stopPropagation()
//   }  

//   render() {
//     return createPortal(<div className='modal' onClick={this.props.exit}>
//             <div onClick={this.handleClick}>
//                 <p>Modal</p>
//                 <button onClick={this.props.exit}>Fermer</button>
//             </div>
//         </div>, this.modalWindow)
//   }
// }
// export default Modal;