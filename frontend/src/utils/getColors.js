function getColors(nameInput, nameAnswer, keyboardCopy){

    let rowColors = Array.from(Array(nameAnswer.length).fill("#333232"))
    let keyboardColors = keyboardCopy

    nameInput.forEach((l, i) => {
        if(l === nameAnswer[i]){
            rowColors[i] = "green"
            keyboardColors[nameInput[i].charCodeAt(0) - 65] = "green"
            nameAnswer[i] = null
        } else if(!nameAnswer.includes(nameInput[i]) && keyboardColors[nameInput[i].charCodeAt(0) - 65] !== "green"){
            keyboardColors[nameInput[i].charCodeAt(0) - 65] = "#333232"
        }
    })

    nameInput.forEach((l, i) => {
        if(nameAnswer.includes(l) && rowColors[i] !== "green"){
            rowColors[i] = "darkorange"
            keyboardColors[nameInput[i].charCodeAt(0) - 65] = keyboardColors[nameInput[i].charCodeAt(0) - 65] === "green" ? "green" : "darkorange"
            nameAnswer[nameAnswer.indexOf(nameInput[i])] = null
        } 
    })

    return {rowColors, keyboardColors}
}

export default getColors