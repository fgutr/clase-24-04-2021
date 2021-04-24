function cargarUsuarios(){
    fetch('https://randomuser.me/api/?results=15',{
        method: 'GET',
        // body: [],
        // headers:{
        //     'Content-Type':'application/json'
        // }
    }).then(res=> res.json())
    .catch(error=> console.error('Error:',error))
    .then(response =>{
        var columnas = ["first","last","email","cell"]
        var body = document.getElementById("filas-remotas")

        for (const iterator of response.results) {
            var tr = document.createElement("tr")
            columnas.forEach(element => {
                var td = document.createElement("td")
                var text = ""
                if (element == "first" || element == "last") {
                    text = iterator["name"][element]
                }else{
                    text = iterator[element]
                }

                td.appendChild(document.createTextNode(text))
                tr.appendChild(td)
            });
            body.appendChild(tr)
        }
    })
}

cargarUsuarios()

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
}

function cargaInicial(){
    if (!localStorage.getItem("datos")) {
        localStorage.setItem("datos",JSON.stringify([]))
    }

    var d = JSON.parse(localStorage.getItem("datos"))
    var columnas = ["nombres","apellidos","correo", "celular","eliminar"]
    var body = document.getElementById("filas")
    var contador = 0
    for (const iterator of d) {
        var tr = document.createElement("tr")
        columnas.forEach(element => {
            var td = document.createElement("td")
            var text = ""
            if (element == "eliminar") {
                text = createElementFromHTML(`<button type="button" class="btn btn-danger" id="${contador}">Eliminar</button>`)
            }else{
                text = document.createTextNode(iterator[element])
            }
            td.appendChild(text)
            tr.appendChild(td)
        });
        body.appendChild(tr)
        contador++
    }
}

cargaInicial()