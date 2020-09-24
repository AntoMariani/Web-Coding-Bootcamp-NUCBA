var Dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

var ingresoDia = prompt("Ingrese un dia: ")

ingresoDia = ingresoDia.toUpperCase()

console.log(ingresoDia)

while(ingresoDia!="LUNES" && ingresoDia!="MARTES" && ingresoDia!="MIERCOLES" && ingresoDia!="JUEVES" && ingresoDia!="VIERNES" && ingresoDia!="SABADO" && ingresoDia!="DOMINGO"){
    ingresoDia = prompt("Error, ingrese un dia")
    ingresoDia = ingresoDia.toUpperCase()
}

// var ingresoNum = prompt("Ingrese un numero entre 1 y 500")
// ingresoNum = parseInt(ingresoNum)
