//Ejercicio 1
//Escribir una función que nos diga “Hola NUCBA”

function hola(){
    console.log("hola NUCBA")
}

hola()

//Ejercicio 2
//Escribir una función a la que se le pase una cadena
//(string) <nombre> y muestre por pantalla el saludo ¡hola
//<nombre>!

function holaNombre(nombre){
    console.log("Hola " + nombre + " !")
}

holaNombre("Antonella")

//Ejercicio 3
//Escribir una función que reciba un número entero positivo y
//devuelva su factorial.

function factorial(numero){
    var resultado = 1 
    for(i=1;i<=numero;i++){
        resultado = resultado * i;
    }
    console.log("El factorial de " + numero + " es: " + resultado)
}

//Ejercicio 4
//Escribir una función que reciba una muestra de números en un
//array y devuelva otro con sus cuadrados.

function cuadrados(arrayNoCuadrados){
    var arrayCuadrados = []
    arrayNoCuadrados.forEach(element => {
        arrayCuadrados.push(element*element)
    });
    console.log(arrayNoCuadrados)
    console.log(arrayCuadrados)
}

var array = [1,2,3,4]

cuadrados(array)

//Ejercicio 5
//Realiza una función llamada area_rectangulo(base, altura) que
//devuelva el área del rectangulo a partir de una base y una //altura.
//(Acuerdense que la formula del área es base * altura)

function area_rectangulo(base, altura){
    console.log("El area de un rectangulo con base " + base + " y altura " + altura + " es: " + base*altura)
}

area_rectangulo(10,20)


function area_rectanguloDos(base, altura){
    return base*altura
}

var area = area_rectanguloDos(10,20)
console.log("El area es: " + area)

//Ejercicio 6
//Realiza una función llamada relacion(a, b) que a partir de dos
//números cumpla lo siguiente:
// Si el primer número es mayor que el segundo, debe devolver
//1.
// Si el primer número es menor que el segundo, debe devolver
//-1.
// Si ambos números son iguales, debe devolver un 0.

function relacion(a,b){
    if(a>b){
        return 1
    }else if (a<b){
        return -1
    }else{
        return 0
    }
}

var comparacion = relacion(4,2)
console.log(comparacion)

comparacion = relacion(2,4)
console.log(comparacion)

comparacion = relacion(2,2)
console.log(comparacion)

//Ejercicio 7
//Solicitar al usuario que ingrese su dirección email. Imprimir un
//mensaje indicando si la dirección es válida o no, valiéndose de
//una función para decidirlo. Una dirección se considerará válida
//si contiene el símbolo @.
//**NOTA: ACUERDENSE QUE UN STRING ES COMO UNA CADENA
//DE CHAR (CARACTERES) POR ENDE, PUEDEN RECORRERLO
//COMO UN ARRAY.
//**LA FUNCION charAt(Posición) nos retorna una letra de un
//string. EJEMPLO:
//**TAMBIEN PUEDEN USAR FOREACH:
//https://stackoverflow.com/questions/1966476/how-can-i-
//process-each-letter-of-text-using-javascript

function validarEmail(str){
    var letra
    var i = 0

    do{
        letra = str.charAt(i)
        i++
    }
    while(i < str.length && letra != "@")

    if(letra == "@"){
        alert("Email valido")
    } else{
        alert("Email invalido")
    }
}

validarEmail(prompt("ingrese su direccion de mail: "))

//Ejercicio 8
//Escribir una función que, dado un número de DNI, retorne True si
//el número es válido y False si no lo es. Para que un número de
//DNI sea válido debe tener entre 7 y 8 dígitos.

function validarDni(dni) {
    if(dni.length == 7 || dni.length == 8 ) {
        alert("Su DNI es valido")
    } else {
        alert("Su DNI es invalido")
    }
}

validarDni(prompt("Inserte su numero de DNI"))

//Ejercicio 9
//Escribir una función que, dado un string, retorne la longitud de la
//última palabra. Se considera que las palabras están separadas
//por uno o más espacios. También podría haber espacios al
//principio o al final del string pasado por parámetro.

var ultima

function ultimaPalabra(str){
    prueba = str.split(' ');
    console.log(prueba)
    str = str.trim()
    palabras = str.split(' ');
    ultima = palabras[palabras.length - 1]
    console.log(ultima.length)
}

ultimaPalabra("anto gato perro ana        ramiro      ")

