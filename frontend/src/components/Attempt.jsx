import React, { useContext, useEffect } from "react";
import Context from "../app/Context";
import './Attempt.css'

function Attempt({handleKeyDown2, currentName, rowNumber, name2}){

    const {color, inputRef, row, answer} = useContext(Context);

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef])

    let typingAnimation = ["", "", "", "", "", "", "", ""]
    let activateFlip = ""

    function handleKeyDown(e){
        
        if(row >= 6 || activateFlip !== "") return
        
        let l = e.key
        handleKeyDown2(l)
    }

    return(
        <div className="attempt" ref={inputRef} tabIndex="0" onKeyDown={e => handleKeyDown(e)}>
            {answer.split("").map((l, i) => {
                typingAnimation[i] = currentName[i] !== undefined ? "digit-animation-attempt black-border-attempt" : "light-border-attempt"
                activateFlip = color[rowNumber][0] === "#E6E6E6" ? "" : "active-flip"
                return(
                    <div key={i} className= {`flip-container`}>
                        <div className={`flipper ${activateFlip}`} style={{transitionDelay: `${0.3 * i}s`}}>
                            <div className="front">
                                <div className={`square-attempt front-style-attempt ${typingAnimation[i]}`}>{currentName[i]}</div>
                            </div>
                            <div className="back">
                                <div className="square-attempt" style={{backgroundColor : `${color[rowNumber][i]}`}}>{name2[i]}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Attempt