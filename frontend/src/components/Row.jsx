import React, { useContext } from "react";
import Context from "../app/Context";
import './Attempt.css'

function Row( {rowNumber, name2}) {

    const { color, answer } = useContext(Context);

    return(
        <div className="attempt">
            {answer.split("").map((l, i) => {
                return(
                    <div key={i} className="square-attempt" style={{backgroundColor : `${color[rowNumber][i]}`}}>{name2[i]}</div>
                )
            })}
        </div>
    )
}

export default Row