import React, { useContext, useEffect } from 'react';
import Context from '../../app/Context'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Result.css"


function Result( {showResult, setShowResult, pAnswer} ) {
  
  const { color, row, frequency, restartGame } = useContext(Context);

  useEffect(() => {
    if(row >= 6) setShowResult(true)
  }, [row, setShowResult])

  const jogarNovamente = () => {
    setShowResult(false)
    restartGame(color[0].length, frequency)
  };

  return (
    <Modal show={showResult} onHide={() => setShowResult(false)} dialogClassName={`modal-result`}>
      <Modal.Header closeButton className='header-result'>
        <div></div>
        <Modal.Title className="title-result">
          {row === 10 ? 
          <i className="fa-solid fa-square-check icon-result" style={{color: "green"}}></i>
          :
          <i className="fa-solid fa-circle-xmark icon-result" style={{color: "red"}}></i>
          }
          <br></br>
          <span className="text-result">{row === 10 ? "Parabéns! Você Acertou" : "Não foi dessa vez!"}</span> 
          <br></br> 
          <span className='text-result'> Reposta: <span className='fw-bold'>{pAnswer} </span> </span> 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-result">
        {color.filter(colorArr => colorArr[0] !== "#E6E6E6")
          .map((colorArr2, i) => {
            return(
              <div key={i} className="row-result">
                {colorArr2.map((c, j) => {
                  return(
                    <div key={j} className="square-result" style={{backgroundColor: c}}></div>
                  )
                })}
              </div>
            )
          })
        }
      </Modal.Body>
      <Modal.Footer className='footer-result'>
        <Button className='btn-result' variant="success" onClick={jogarNovamente}>
          Jogar Novamente
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Result;