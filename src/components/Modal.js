import { useEffect } from "react"
import { createPortal } from "react-dom";

const Modal = ({children, exit}) => {
  const modalWindow = document.createElement('div');

  useEffect (()=>{
    const app= document.querySelector('.App');
    app.appendChild(modalWindow);
    return ()=>{
      app.removeChild(modalWindow);
    }
  },[modalWindow]);


  return createPortal(
    <div onClick={exit} className="modal">
        <div className="modalDiv" onClick={e=>e.stopPropagation()}>
          {children}
          <button className="exitModal" onClick={exit}>X</button>
        </div>
    </div>, modalWindow)
}

export default Modal;