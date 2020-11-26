// Logic to list uploaded files
const inputFormElement = document.getElementById("h-file")
const fileListElement = document.getElementById("file-list")
inputFormElement.onchange = handleChange



function handleChange(){
    let fileList = ""
    for(let i = 0; i < inputFormElement.files.length; i++){
        let fileName = inputFormElement.files.item(i).name
        fileList += `<div>${fileName}<div>`
        // console.log(fileName)
    }
    fileListElement.innerHTML = fileList
}