import { useState, useEffect, useRef } from 'react'
import Axios from "axios"
import Context from "./Context";
import Main from './Main';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {

  const [name, setName] = useState(Array(6).fill(""))
  const [color, setColor] = useState(Array(6).fill(null).map(()=>Array(5).fill("#E6E6E6")))
  const [keyboard, setKeyboard] = useState(Array(26).fill("#c5c5c5"))
  const [row, setRow] = useState(0)
  const [answer, setAnswer] = useState("")
  const [alert, setAlert] = useState(false)
  const [enableFreeAttempt, setEnableFreeAttempt] = useState(true)
  const [frequency, setFrequency] = useState(0)
  const [availableNames, setAvailableNames] = useState("992")
  const [loading, setLoading] = useState(true)
  const inputRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(()=>{
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}/drawname/5/0`)
    .then(response => {
      setAnswer(response.data.nome)
      setLoading(false)
    })
  },[])

  function restartGame(length, freq){
    setLoading(true)

    Axios.get(`${process.env.REACT_APP_BACKEND_URL}/drawname/${length}/${freq}`)
        .then(response => 
          {
            setAnswer(response.data.nome)
            setName(Array(6).fill(""))
            setColor(Array(6).fill(null).map(()=>Array(Number(length)).fill("#E6E6E6")))
            setRow(0)
            setFrequency(freq)
            setKeyboard(Array(26).fill("#c5c5c5"))
            setAlert(false)
            setLoading(false)
          })
          
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}/totalavailable/${length}/${freq}`)
        .then(response => setAvailableNames(parseInt(response.data.count)))
  }

  return (
    <Context.Provider value={ 
      { name, setName,
        color, setColor,
        keyboard, setKeyboard,
        row, setRow,
        answer, setAnswer,
        alert, setAlert,
        enableFreeAttempt, setEnableFreeAttempt,
        frequency, setFrequency,
        availableNames, setAvailableNames,
        inputRef, settingsRef, restartGame,
        loading, setLoading
      }
    }>
      <Main></Main>
    </Context.Provider>
  );
}

export default App;