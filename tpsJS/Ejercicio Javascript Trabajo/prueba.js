
var ingresoDias = prompt("Ingrese un dia de la semana. Ej: \"MARTES\" ")
var ingresoDias = ingresoDias.toUpperCase()

while(ingresoDias!="LUNES" && ingresoDias!="MARTES" && ingresoDias!="MIERCOLES" && ingresoDias!="JUEVES" && ingresoDias!="VIERNES" && ingresoDias!="SABADO" && ingresoDias!="DOMINGO" ){
    var ingresoDias = prompt("Incorrecto, ingrese el nombre del dia nuevamente:")
    var ingresoDias = ingresoDias.toUpperCase()
    console.log(ingresoDias)
}

var ingresoNumero = prompt("Ingrese un numero entre 1 y 500");

while(ingresoNumero<0 || ingresoNumero>500){
    var ingresoNumero = prompt("Incorrecto, ingrese el numero nuevamente:")
    console.log(ingresoNumero)
}

ingresoNumero = parseInt(ingresoNumero)

var diaInicioNum;

switch(ingresoDias){
    case "LUNES":
        diaInicioNum = 0;
        break;
    case "MARTES":
        diaInicioNum = 1;
        break; 
    case "MIERCOLES":
        diaInicioNum = 2;
        break;  
    case "JUEVES":
        diaInicioNum = 3;
        break;  
    case "VIERNES":
        diaInicioNum = 4;
        break;
    case "SABADO":
        diaInicioNum = 5;
        break;
    case "DOMINGO":
        diaInicioNum = 6;
        break;
}

diaInicioNum = parseInt(diaInicioNum)

var Dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

var variableAuxiliar = diaInicioNum;

var diaFinal = ingresoNumero + diaInicioNum;

for (let i = diaInicioNum; i <= diaFinal; i++) {

    if(i!=diaInicioNum)
    {
        variableAuxiliar++;
    }

    if(variableAuxiliar>6)
    {
        variableAuxiliar = 0;
    }

    console.log("la variable del for i es:" + i)
    console.log("la variable de ayuda para saber que dia es al final del for es:" + variableAuxiliar)
}

alert("El dia " + ingresoDias + " \+ " + ingresoNumero + " = " + Dias[variableAuxiliar])














