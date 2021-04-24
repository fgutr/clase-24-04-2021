function Guardar(){
    Swal.fire({
        title: '¿Estas seguro?',
        text: "¿Realmente quieres guardar el usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI',
        cancelButtonText: 'NO',
      }).then((result) => {
        if (result.isConfirmed) {
          if (!datos) {
            localStorage.setItem("datos",JSON.stringify([]))
          }
          var nombres = document.getElementById("nombres").value
          var apellidos = document.getElementById("apellidos").value
          var correo = document.getElementById("correo").value
          var celular = document.getElementById("celular").value

          var datos = JSON.parse(localStorage.getItem("datos"))

          var obj = {
              nombres:nombres,
              apellidos:apellidos,
              correo:correo,
              celular:celular
          }

          datos.push(obj)
          localStorage.setItem("datos",JSON.stringify(datos))
          Swal.fire({
            title: 'Usuario guardado exitosamente',
            confirmButtonText: `Ok`,
            icon:'success'
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.href = 'index.html'
            }
          })

        }
    })
}

function cancelar(){
    window.location.href = 'index.html'
}