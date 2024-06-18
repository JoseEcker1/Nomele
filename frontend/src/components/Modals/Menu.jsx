import React, { useState, useContext } from "react";
import Context from "../../app/Context";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import "bootstrap/dist/css/bootstrap.min.css";
import './Menu.css'

function Menu(){

    const {restartGame, answer, frequency, availableNames, setEnableFreeAttempt, enableFreeAttempt} = useContext(Context);
    const [radioValue, setRadioValue] = useState(answer.length.toString());

    const radios = [
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' }
    ];

    function changeLength(l){
        restartGame(l, frequency)
        setRadioValue(l)
    }
    
    return(
        <div className="menu">
            <div className="row-menu">
                <div className="fw-bold">Nº de letras</div>
                 <ButtonGroup>
                    {radios.map((radio, idx) => (
                    <ToggleButton className="group-buttons-menu"
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={"outline-dark"}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => changeLength(e.currentTarget.value)}
                        >
                        {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>
            <hr className="hr-menu"></hr>
            <div className="row-menu">
                <div className="fw-bold">
                    Tentativa Livres 
                    <i className="fa-solid fa-circle-info info-icon-menu" data-bs-toggle="tooltip" data-bs-placement="top" 
                       title="se desativado, o jogo aceitará apenas nomes válidos como tentativa."></i>
                </div>
                <label className="checkmark-menu">
                    <input type="checkbox" onChange={e => setEnableFreeAttempt(e.target.checked)} checked={enableFreeAttempt}/>
                    <span className="checkmark"></span>
                </label>
            </div>
            <hr className="hr-menu"></hr>
            <div className="row-menu">
                <div className="fw-bold">
                    Frequência 
                    <i className="fa-solid fa-circle-info info-icon-menu" data-bs-toggle="tooltip" data-bs-placement="top" 
                       title="quanto maior a frequência selecionada, mais comum serão os nomes disponíveis."></i>
                </div>
                <select className="select-menu" name="" id="" onChange={e => restartGame(answer.length, e.target.value)} value={frequency}>
                    <option value="0">&gt; 0</option>
                    <option value="10000">&gt; 10K</option>
                    <option value="20000">&gt; 20K</option>
                    <option value="30000">&gt; 30K</option>
                    <option value="40000">&gt; 40K</option>
                    <option value="50000">&gt; 50K</option>
                    <option value="60000">&gt; 60K</option>
                    <option value="70000">&gt; 70K</option>
                    <option value="80000">&gt; 80K</option>
                </select>
            </div>
            <hr className="hr-menu"></hr>
            <div className="row-menu">
                <div className="fw-bold">Nomes disponíveis</div>
                <div>{availableNames}</div>
            </div>
        </div>
    )
}

export default Menu