
let id = localStorage.getItem('id');
console.log(id);
var enlace = ("/modificarTareas/editar/" + id);
console.log(enlace);

async function postCampos(id) {
    valor = { _id: id }
    const res = await fetch('/modificarTareas/recibir', {
        method: 'POST',
        body: JSON.stringify(valor),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return data;
}
const fecha = document.getElementById('fechaTarea');
const nombre = document.getElementById('nombre');
const prioridad = document.getElementById('prioridad');
const descripcion = document.getElementById('descripcion');
const encargado =document.getElementById('encargado');

async function llenarCampos() {
    var response = await postCampos(id);
    console.log(response);

    fecha.value = response[0].fechaTarea
    nombre.value = response[0].nombre;
    descripcion.value = response[0].descripcion;
    prioridad.value = response[0].prioridad;
    encargado.value= response[0].encargado;

}

llenarCampos();

function modificar() {

    let datos = ["fechaTarea", "nombre", "descripcion", "prioridad", "encargado"];
    let valores = {};
    let aprobado = false;

    for (let dato of datos) {
        valores[dato] = document.getElementById(dato).value;
    }
    for (let i in valores) {
        if (valores[i] == "") {
            swal({
                title: "Modificación Incorrecta",
                text: "Debe completar todos los campos de manera correcta",
                icon: "warning",
                button: "Continuar",
            });
            aprobado = false;
            break;
        } else {
            aprobado = true;
        }
    }
    if (aprobado) {

        fetch(enlace, {
            method: 'PUT',
            body: JSON.stringify(valores),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response => console.log('Success:', response));

        swal({
            title: "Registro Correcto",
            text: "Registro Exitoso",
            icon: "success",
            button: "Continuar",
        });

        setTimeout(() => {
            window.location.replace(
                "../index.html"
            )
        }, 2000);
    }


}