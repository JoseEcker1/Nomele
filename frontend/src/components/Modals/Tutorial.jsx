import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Context from '../../app/Context';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tutorial.css"

function Tutorial({showTutorial, setShowTutorial}) {

  const { inputRef } = useContext(Context)

  const handleClose = () => {
    setShowTutorial(false)
    setTimeout(() => {
      if(inputRef.current != null) inputRef.current.focus()
    }, 200)
  }

  return (
    <Modal show={showTutorial} onHide={handleClose} dialogClassName='modal-tutorial'>
        <Modal.Header closeButton className='header-tutorial'>
          <Modal.Title className='titulo-tutorial'>Tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body-tutorial'>
            <p className="subtitle-tutorial">Descubra o nome da pessoa em 6 tentativas!</p>
            <span className='line-tutorial fw-bold'>Exemplos:</span>
            <div className="line-tutorial">A letra <span className='fw-bold'>L</span> está presente no nome e na posição correta.</div>
            <div className="container-tutorial">
              <div className="square-tutorial">A</div>
              <div className="square-tutorial" style={{backgroundColor: "green", color: "white"}}>L</div>
              <div className="square-tutorial">I</div>
              <div className="square-tutorial">C</div>
              <div className="square-tutorial">E</div>
            </div>
            <div className="line-tutorial">A letra <span className='fw-bold'>N</span> está presente no nome mas a posição está errada.</div>
            <div className="container-tutorial">
              <div className="square-tutorial">B</div>
              <div className="square-tutorial">R</div>
              <div className="square-tutorial">U</div>
              <div className="square-tutorial" style={{backgroundColor: "darkorange", color: "white"}}>N</div>
              <div className="square-tutorial">O</div>
            </div>
            <div className="line-tutorial">A letra <span className='fw-bold'>D</span> não está presente no nome.</div>
            <div className="container-tutorial">
              <div className="square-tutorial">A</div>
              <div className="square-tutorial">N</div>
              <div className="square-tutorial" style={{backgroundColor: "#333232", color: "white"}}>D</div>
              <div className="square-tutorial">R</div>
              <div className="square-tutorial">E</div>
            </div>
        </Modal.Body>
        <Modal.Footer className='footer-tutorial'></Modal.Footer>
    </Modal>
  );
}

export default Tutorial;