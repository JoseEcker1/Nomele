import React, { useContext } from "react";
import Context from "../app/Context";
import './Keyboard.css'

function Keyboard( {handleKeyDown2} ){

    const {keyboard} = useContext(Context);

    const qwertyuiop = [16, 22, 4, 17, 19, 24, 20, 8, 14, 15], asdfghjkl = [0, 18, 3, 5, 6, 7, 9, 10, 11], zxcvbnm = [25, 23, 2, 21, 1, 13, 12]
    return(
        <div className="keyboard">
            <div className="row-keyboard">
                {qwertyuiop.map(i => {
                    return(
                        <div 
                        key={i} 
                        className="letter-keyboard" 
                        onClick={() => handleKeyDown2(String.fromCharCode(i + 65))}
                        style={{backgroundColor : `${keyboard[i]}`, color: `${keyboard[i] === "#c5c5c5" ? "black" : "white"}`}}
                        >
                        {String.fromCharCode(i + 65)}
                        </div>
                    )
                })}
            </div>
            <div className="row-keyboard">
                {asdfghjkl.map(i => {
                    return(
                        <div 
                        key={i} 
                        className="letter-keyboard" 
                        onClick={() => handleKeyDown2(String.fromCharCode(i + 65))}
                        style={{backgroundColor : `${keyboard[i]}`, color: `${keyboard[i] === "#c5c5c5" ? "black" : "white"}`}}
                        >
                        {String.fromCharCode(i + 65)}
                        </div>
                    )
                })}
                <div className="letter-keyboard" style={{backgroundColor: "#c5c5c5"}} onClick={e => handleKeyDown2("Backspace")}>
                    <i className="fa-solid fa-delete-left"></i>
                </div>
            </div>
            <div className="row-keyboard">
                {zxcvbnm.map(i => {
                    return(
                        <div 
                        key={i} 
                        className="letter-keyboard" 
                        onClick={() => handleKeyDown2(String.fromCharCode(i + 65))}
                        style={{backgroundColor : `${keyboard[i]}`, color: `${keyboard[i] === "#c5c5c5" ? "black" : "white"}`}}
                        >
                        {String.fromCharCode(i + 65)}
                        </div>
                        )
                    })}
                <div className="enter-keyboard" onClick={e => handleKeyDown2("Enter")}>ENTER</div>
            </div>
        </div>
    )
}

export default Keyboard