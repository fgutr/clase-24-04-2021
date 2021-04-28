function onClickButton(prop){
    var result = document.getElementById("resultado").innerText
    console.log(result);

    switch (prop) {
        case "=":
            //calcular
            calcular(result)
            break;
        case "C":
            //borrar todo
            reset()
            break;
        case "CE":
            //borrar uno a uno
            backspace()
            break;
        
        default:
            if (result === "0" && result+prop != '0.') {
                document.getElementById("resultado").innerText = prop
            }else{
                document.getElementById("resultado").innerText = result + prop
            }
            break;
    }
}

function calcular(prop){
    var checkResult = ""
    if (prop.includes("--")) {
        checkResult = prop.replace("--","+")
    }else{
        checkResult = prop
    }

    try {
        document.getElementById("resultado").innerText = (eval(checkResult).toString() || "") + ""
    } catch (error) {
        document.getElementById("resultado").innerText = "Error"
    }
}

function reset(){
    document.getElementById("resultado").innerText = "0"
}

function backspace(){
    if (document.getElementById("resultado").innerText !== "0") {
        document.getElementById("resultado").innerText = document.getElementById("resultado").innerText.slice(0,-1) 
    }
}