let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerText === "CE"){
            display.innerText = ""
        }else if(e.target.innerText === "←"){
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1)
            }
        }else if(e.target.innerText === "X"){
            display.innerText += "*";
        }
        else if(e.target.innerText === "="){
            try{
                display.innerText = eval(display.innerText)
            }catch{
                display.innerText = "Error!"
            }
        }
        else{
            display.innerText += e.target.innerText
        }
    })
})



