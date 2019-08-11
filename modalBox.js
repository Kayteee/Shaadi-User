import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal'

const ModalBox = props => {
  
  return ReactDOM.createPortal(
    <Modal.Dialog >
    <Modal.Header>
       <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
  <Modal.Body>
       <p>The Slide Number was {props.match.params.noOfSlides}.</p>
    </Modal.Body> 
    <Modal.Footer>
    
    <button onClick={() => props.history.push('/')} className="btn btn-primary">Back to Hompage</button>
  </Modal.Footer>
</Modal.Dialog>,document.querySelector('#modal')
  )
}

export default ModalBox