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
          <button className="exitModal" onClick={exit}>x</button>
        </div>
    </div>, modalWindow)
}

export default Modal;