import React from 'react';
import spray from '../img/sprayBG.png';
const Modal = ({heading,content,negative,affirmative, show, onClose, onSubmit }) =>{
    // function onSubmit(e){
    //   console.log('submit');
    //   onClose();
    // }
    if (!show) return null;
    return (
      <div className='overlay'>
        <div className="modal" id="modal">
            <div className="modalHeader sprayed">
                <h2>{heading}</h2>
                <button onClick={onClose}>X</button>
            </div>
          
          <div className="modalContent">{content}</div>
          <div className="modalActions">
            {negative &&
                <button className="toggle-button sprayed" onClick={onClose}>
                  {negative}
                </button>
            }
            {affirmative &&
              <button className="toggle-button sprayed" onClick={onSubmit}>
                {affirmative}
              </button>
            }
          </div>
        </div>
      </div>
    )
  }
  export default Modal;