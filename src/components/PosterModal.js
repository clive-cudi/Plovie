import React from 'react';
import { useContext } from 'react';
import { PosterModalCtx } from './contexts/PosterModalCtx';

function PosterModal({image}){
    const [showPosterModal, setPosterModal] = useContext(PosterModalCtx);

    function closePosterModal(){
          setPosterModal({
            status: false,
            image: ""
          })
      }

    return (
        <div className="poster-modal-main-wrapper" onClick={()=>{
            closePosterModal();
        }}>
            <div className="pm-wrapper">
                <img src={image} alt="Loading..." />
            </div>
        </div>
    )
}

export default PosterModal;