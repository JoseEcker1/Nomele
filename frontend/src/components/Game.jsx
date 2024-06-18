import React, { useContext, useState } from "react";
import getColors from '../utils/getColors'
import Axios from "axios"
import Context from "../app/Context";
import Keyboard from "./Keyboard";
import Attempt from "./Attempt";
import Row from "./Row";
import Result from "./Modals/Result";
import './Game.css'

function Game(){

    const { inputRef, settingsRef, setAlert, enableFreeAttempt, answer, name, setName,
            row, setRow, color, setColor, keyboard, setKeyboard} = useContext(Context);

    const [currentName, setCurrentName] = useState("")
    const [showResult, setShowResult] = useState(false)

    async function handleEnter(){

        if(answer.length > currentName.length){

            setAlert("Número insuficiente de letras")

            let newShake = inputRef.current.classList[1] === "shake" ? "shake2" : "shake"
            inputRef.current.classList.remove(inputRef.current.classList[1])
            inputRef.current.classList.add(newShake)

            return;
        }

        if(!enableFreeAttempt && !(await findName(currentName))) return

        let copyName = name
        copyName[row] = currentName
        setName([...copyName])

        let {rowColors, keyboardColors} = getColors(currentName.split(""), answer.split(""), Array.from(keyboard))

        let copyColor = color
        copyColor[row] = rowColors
        setColor([...copyColor])
        settingsRef.current.toggleAttribute("disabled")

        setTimeout(function(){ 
            setKeyboard([...keyboardColors])
            let newRow = (answer === name[row]) ? 10 : row + 1
            setRow(newRow);            
            settingsRef.current.toggleAttribute("disabled")
            setCurrentName("")
        }, ( 300 * name[0].length + 300 ));

    }

    function isLetter(c) {
        return c.length === 1 && c.match(/[a-z]/i);
    }

    function handleKeyDown2(l){

        if(row >= 6) return

        if(alert && l !== "Enter") setAlert(false)
      
        if(isLetter(l) && answer.length > currentName.length){
            setCurrentName(currentName + l.toUpperCase())
        } 
        else if(l === "Backspace"){
            if(currentName.length !== 0){
                let copyName = currentName.slice(0, - 1)
                setCurrentName(copyName)
            }
        } 
        else if(l === "Enter"){
            handleEnter()
        } 
        else{
            return
        }
    }

    async function findName(name){

        let found = true
        await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/search/${name}`).then( (response) => {
            if(!response.data){
                found = false

                let newShake = inputRef.current.classList[1] === "shake" ? "shake2" : "shake"
                inputRef.current.classList.remove(inputRef.current.classList[1])
                inputRef.current.classList.add(newShake)
                setAlert("Nome não encontrado!")
            }
        })

        return found
    }

    function handleClick(){
        if(!showResult && row >= 6) setShowResult(true)
    }

    return (
        <div className="game" onClick={() => handleClick()}> 
            <div className="container-game">
                {name.map((name2, i) => {
                    if(i === row){
                        return(
                            <Attempt key={i}
                                currentName={currentName}
                                rowNumber={i} 
                                name2={name2} 
                                handleKeyDown2={handleKeyDown2}>
                            </Attempt>
                        )
                    } else{
                        return <Row key={i} rowNumber={i} name2={name2}></Row>
                    }
                })}
            </div>
            <Keyboard handleKeyDown2={handleKeyDown2}></Keyboard>
            <Result showResult={showResult} setShowResult={setShowResult} pAnswer={answer}></Result>
        </div>       
    )
}

export default Game