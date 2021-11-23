import React from 'react';
import './modal.css';

function Modal({data}){
    return(
        <div className="modal-main-wrapper">
            {data}
        </div>
    )
}

export default Modal;