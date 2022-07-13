// alert("¿Desea ver una secuencia de numeros en consola?")
// opc=prompt("Indique si para ver la secuencia, caso contrario ingrese no")

// if(opc === "si" || opc === "SI"){

//     for(let i = 0 ; i <= 10 ; i++){
//         console.log (i)
//     }
// }
// else if (opc === "no" || opc === "NO"){
//     console.log("Que mala onda, dejame practicar")
// }
// else if (opc === ""){
//     console.log("Tenes que ingresar si o no")
// }

/*--------Desafio de funciones js--------*/

function pago (modoDePago){
    if(modoDePago === "efectivo" || modoDePago === "Efectivo"){
        console.log("El precio de contado tiene un 10% de descuento")
    }
    else if(modoDePago === "cuotas" || modoDePago === "Cuotas"){
        for (let i = 3 ; i <= 12 ; i+=3){
            if(i === 3){
                console.log(`Puede hacerlo en ${i} cuotas`)
            }
            else if (i === 6 || i === 9){
                console.log(`en ${i} cuotas`)
            }
            else if (i === 12){
                console.log(`o hasta en ${i} cuotas`)
            }
        }
    }
}

modoDePago= prompt("¿De que manera desea realizar el pago? Efectivo o en Cuotas")

pago(modoDePago)


