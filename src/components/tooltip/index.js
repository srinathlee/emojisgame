import React from 'react';
import Popup from 'reactjs-popup';
import "./index.css"

export const ToolTipPositions=() =>{
  return(
  <Popup
    trigger={<button className="button-trigger"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Constraints </div>
        <div className="content">
        <ul className='content'>
          <li>There will be 12 emoji cards , click on each emoji</li>
          <li>If you click any emoji twise will LOOSE</li>
          <li>If you click all emojis without repeatation you will WIN</li>
        </ul>
        </div>
       
      </div>
    )}
  </Popup>
)}

export default ToolTipPositions