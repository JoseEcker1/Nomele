import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Menu from './Menu';
import Context from '../../app/Context';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Settings.css"


function Settings({showSettings, setShowSettings}) {

  const {inputRef} = useContext(Context);
  
  const handleClose = () =>  {
    setShowSettings(false);
    setTimeout(() => {
      if(inputRef.current != null) inputRef.current.focus()
    }, 200)
  }

  return (
    <Modal show={showSettings} onHide={handleClose} dialogClassName="modal-settings">
        <Modal.Header closeButton className='header-settings'>
          <div></div>
          <Modal.Title className="title-settings">Configurações</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Menu></Menu>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default Settings;