///////////////////////////////////////////////////////////////////////////////////////

 console.log('Ejercicio 1 - Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.')

 var texto = prompt('Escriba una palabra, se repetira 10 veces: ');

 while(!(/^[a-z]+$/i.test(texto)))
 {
     texto = prompt('Error, la palabra solo debe tener el siguiente formato: a-z y A-Z. Ingresela nuevamente: ');
 }

 for(i=0;i<10;i++){
     console.log(texto)
 };

////////////////////////////////////////////////////////////////////////////////////////

 console.log('Ejercicio 2 Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).')

 var edad = prompt('Ingrese su edad: ')

 while(!(/^[0-9]{0,3}$/.test(edad)))
 {
     edad = prompt('Error, edad erronea. Ingresela nuevamente: ');
 }

 for(i=1;i<=edad;i++){
     console.log(i);
 };

////////////////////////////////////////////////////////////////////////////////////////

  console.log('Ejercicio 3 Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas.')

  var numEyP = prompt('Ingrese un numero entero y positivo: ');

  while(!(/^[0-9]\d*$/.test(numEyP)))
  {
      numEyP = prompt('Error, Ingrese el numero nuevamente: ');
  }

  var arrayNumEyP = [];

  for(i=0;i<=numEyP;i++){
      if(!(i % 2 == 0)){
          arrayNumEyP.push(i)
      }
  }

 console.log(arrayNumEyP)

////////////////////////////////////////////////////////////////////////////////////////

 console.log('Ejercicio 4 Escribir un programa que pida al usuario un número entero positivo ymuestre por pantalla la cuenta atrás desde ese número hasta cero separadospor comas.')
 console.log('variante 1 donde no convierto el numero')

 var numEyP2 = prompt('Ingrese un numero entero y positivo: ');

 while(!(/[0-9]\d*$/.test(numEyP2))){
     numEyP2 = prompt('Error, Ingrese un numero entero y positivo: ');
 }

 var arrayNumEyP2 = [];

 for(i=numEyP2;i>=0;i--){
     arrayNumEyP2.push(i)
 }

 console.log(arrayNumEyP2);

////////////////////////////////////////////////////////////////////////////////////////

 console.log('variante 2 convierto el numero')

 var numEyP3 = prompt('Ingrese el segundo numero entero y positivo: ');

 while(!(/[0-9]\d*$/.test(numEyP3))){
     numEyP3 = prompt('Error, Ingrese un numero entero y positivo: ');
 }

 //aca convierto el numero a entero porque por el prompt ingresa un string
 var integer = parseInt(numEyP3, 10);

 var arrayNumEyP3 = [];

 for(i=integer;i>=0;i--){
     arrayNumEyP3.push(i)
 }

 console.log(arrayNumEyP3);

////////////////////////////////////////////////////////////////////////////////////////

  console.log('Ejercicio 5 Escriba un programa que pida un número entero mayor que cero y calcule su factorial.')

  var numEyMC = prompt('Ingrese un numero entero mayor que 0: ')

  while(!(/[1-9]\d*$/.test(numEyMC))){
      numEyMC = prompt('Error, Ingrese un numero entero y mayor que cero: ');
  }

 integer = parseInt(numEyMC, 10);

  var total = 1;

  for(i=1;i<=integer;i++){
      total = total * i;    
  }

  console.log('El factorial de' + numEyMC + 'da' + total)

////////////////////////////////////////////////////////////////////////////////////////

 console.log('Ejercicio 6 Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al10.')

 for(i=1;i<=10;i++){
     console.log('\ntabla del ' + i + ':');
     for(z=0;z<=10;z++){
         console.log(i + "x" + z + '=' + i*z)
     }
 }

////////////////////////////////////////////////////////////////////////////////////////

 console.log('Ejercicio 7 Escribir un programa que pida dos números y muestre por pantalla los números que hay diferencia entre ellos dos.')

 var numeroUno = prompt('Ingresar primer numero: ');
 var numeroDos = prompt('Ingresar segundo numero: ');

 if(numeroUno > numeroDos){
     for(i=numeroDos;i<=numeroUno;i++){
         console.log(i);
     }
 } else {
     for(i=numeroUno;i<=numeroDos;i++){
         console.log(i);
     }
 }

////////////////////////////////////////////////////////////////////////////////////////

 console.log('Ejercicio 8 Escribir un programa que muestre por pantalla la tabla de multiplicar de un número ingresado por el usuario')

 var numeroAMultiplicar = prompt('Ingrese un numero para ver su tabla de multiplicar:')

 console.log('La tabla del' + numeroAMultiplicar + ': ')
 for(i=0;i<=numeroAMultiplicar;i++){
     console.log(numeroAMultiplicar + 'x' + i + '=' + i*numeroAMultiplicar)
 }


