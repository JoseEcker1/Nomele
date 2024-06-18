import React, { useContext } from "react";
import Context from './Context'
import Game from "../components/Game";
import Header from "../components/Header";
import Alert from 'react-bootstrap/Alert';
import Loading from "../components/Loading";
import './Main.css'
import '../components/Alert.css'

function Main(){

    const { inputRef, alert, loading } = useContext(Context);

    function focusInput(){
        if(inputRef.current !== null)   inputRef.current.focus()
    }

    return(
        <main className="main" onClick={focusInput}> 
            <Header></Header>
            <div className="container-alert">
                <Alert show={typeof(alert) === "string" ? true : false} className={`alert animation-alert`} variant={"primary"}>
                    {alert}
                </Alert>
            </div>
            {loading ? <Loading></Loading> : <Game></Game>}
        </main>
    )
}

export default Main