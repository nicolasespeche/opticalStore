// //----------- SIMULADOR DE TURNOS ---------------

// const turnosAsignados = [];

// for(let i = 0; i <= 1; i++){
    
//     alert("Bienvenido, a continuación solicitaremos algunos datos para adjudicarle el turno");
//     let receta = prompt("¿Posee receta confeccionada por un oftalmólogo?");

//     if(receta === "si" || receta === "Si" || receta === "SI"){
        
//         let nombreIngresado = prompt("Ingrese su nombre");
//         let apellidoIngresado = prompt ("Ingrese su apellido");
//         let diaTurnoIngresado = prompt ("¿Qué día podría asistir? (Utilizar el siguiente formato DD/MM")
//         let horaTurnoIngresado = prompt("¿En qué horario va a concurrir? (Utilizar el siguien formato XX:XX)")
        
//         // let comprobacionTurno = turnosAsignados.some((elemento) => {
//         //     return elemento.horaTurno == horaTurnoIngresado
//         // })
//         // if(comprobacionTurno = true){
//         //     alert("El turno ya se encuentra ocupado")
//         // }
        
//         function nuevoTurno (nombre,apellido,diaTurno,horaTurno){
//             this.nombre = nombre;
//             this.apellido = apellido;
//             this.diaTurno = diaTurno;
//             this.horaTurno = horaTurno;
//         }
        
//         turnosAsignados.push(new nuevoTurno(nombreIngresado,apellidoIngresado,diaTurnoIngresado,horaTurnoIngresado));
        
//     }
//     else if (receta === "no" || receta === "No" || receta === "NO"){
//         alert("Debe primero, consultar a su oftalmólogo");
//     }
//     else{
//         alert("Usted debe ingresar:  si / no");
//     }
    
// }



// console.log(turnosAsignados)

const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#nombre")
const inputApellido = document.querySelector("#apellido")
const inputDiaTurno = document.querySelector("#diaTurno")
const inputHoraTurno = document.querySelector("#horaTurno")

arrayTurnos = []


function turno (nombre,apellido,diaTurno,horaTurno){
    this.nombre = nombre;
    this.apellido = apellido;
    this.diaTurno = diaTurno;
    this.horaTurno = horaTurno;
}


formulario.onsubmit = (event) => {
    event.preventDefault()
    arrayTurnos.push(new turno (inputNombre.value, inputApellido.value, inputDiaTurno.value, inputHoraTurno.value))
    console.log(arrayTurnos)
}