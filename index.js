alert("¿Desea ver una secuencia de numeros en consola?")
opc=prompt("Indique si para ver la secuencia, caso contrario ingrese no")

if(opc === "si" || opc === "SI"){

    for(let i = 0 ; i <= 10 ; i++){
        console.log (i)
    }
}
else if (opc === "no" || opc === "NO"){
    console.log("Que mala onda, dejame practicar")
}
else if (opc === ""){
    console.log("Tenes que ingresar si o no")
}