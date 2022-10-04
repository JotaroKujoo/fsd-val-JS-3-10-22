// let edad = 21;

// let resultado = (edad <= 16) ? "No puedes conducir en usa" : "Si";


// let dinero = 50;

// while(dinero >=0){
//     console.log("Estoy comprando y me quedan", dinero, " euros")
//     dinero--;
// }

// let contador = 0;
// let num = 3;

// while (contador<=10){
//     console.log(num,"multiplicado por",contador,"es igual a ",num*contador)
//     contador+=1

// };


// let numero = 36;

// do {
//     console.log("David es un genio")
// } while (numero < 36);

// BUCLE FOR

// let tabla = 3;

// for(let i = 1; i <= 10; i++){
//     console.log(tabla*i)

// }

// FUNCIONES

// function Sumar(num1, num2){
//     let resultado = num1 + num2;
//     return resultado
// }

// function Dividir(num1, num2){
//     let resultado =num1 / num2;
//     return resultado
// }


// let resultadoDeSuma = Sumar(3,4);
// console.log(resultadoDeSuma)

// let resultadoDeDividir = Dividir(8,2)
// console.log(resultadoDeDividir)

// function Elevar(num1, num2){
//     let resultado = num1 ** num2;
//     return resultado
// };

// let operador = parseInt(prompt("Introduce el numero a elevar..."));
// let base = parseInt(prompt("Introduce a cuanto lo quieres elevar..."));

// let resultadoElevar = Elevar(operador, base);
// console.log(resultadoElevar);

// let manelArrayHobies = [
//     "Tocar el bajo",
//     "Leer",
//     "Cine",
//     "Programación"
// ]

// let numeros = [];

// for(let i = 1; i<=100; i++){
//     numeros.push(i)
// }



// EJERCICIO 9 

// for(let i = 0; i <= 100;i++){
//         if ((i%2 == 0) && (i%3 == 0){
//             console.log(i)
//         }
// }

// EJERCICIO 10

// let nVentas = parseInt(prompt("Introduce el numero de datos a introducir:  "));

// let venta;

// suma = 0;

// for(let i = 0;i<nVentas;i++){
//     venta = parseInt(prompt("Introduce el valor de la venta"))
//     suma = suma+venta
// }

// console.log(suma)


// EJERCICIO 11

// dia = prompt("Introduce un dia de la semana: ").toLocaleLowerCase

// switch(dia) {
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         console.log("Es un dia laboral")
//     case "sabado":
//     case "domingo":
//         console.log("Es fin de semana")
// }


// EJERCICIO 12

// let password = "1234";
// let passwordUser = prompt("Introduce tu contraseña: ");
// let intentos = 3;



// while ((passwordUser != password) && (intentos > 0) ){
//     passwordUser = prompt("Introduce tu contraseña: ");
//     if (passwordUser==password){
//         break
//     }
//     intentos-=1

// }

// EJERCICIO 13

// function Sumar(num1,num2){
//     return num1+num2;
// }
// function Restar(num1,num2){
//     return num1-num2;
// }

// function Multiplicar(num1,num2){
//     return num1*num2;
// }

// function Dividir(num1,num2){
//     return num1/num2;
// }

// function Elevar(num1,num2){
//     return num1**num2;
// }

// function Resto(num1,num2){
//     return num1%num2
// }


// let n1 = parseInt(prompt("Introduce un numero: "));
// let n2 = parseInt(prompt("Introduce un numero: "));
// let option = prompt("Introduce el signo aritmetico de la operación (Suma +, Resta -,etc):")

// switch(option){
//     case "+":
//         console.log(Sumar(n1,n2))
    
//     case "-":
//         console.log(Restar(n1,n2))


//     case "*":
//         console.log(Multiplicar(n1,n2))

        
//     case "/":
//         console.log(Dividir(n1,n2))
        
//     case "^":
//         console.log(Elevar(n1,n2))
        
//     case "%":
//         console.log(Resto(n1,n2))
//     }

