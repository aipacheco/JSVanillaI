/*1. Declara 2 variables numéricas (con el valor que desees), e indica cual es mayor de los
dos. Si son iguales indicarlo también. Ve cambiando los valores para comprobar que
funciona.*/

const Comparador = (a, b) => {
  if (a > b) {
    resultado = `${a} es mayor que ${b}`
  } else if (a < b) {
    resultado = `${a} es menor que ${b}`
  } else {
    resultado = `${a} es igual que ${b}`
  }
  return resultado
}

console.log(Comparador(1,0))
console.log(Comparador(2,5))
console.log(Comparador(5,2))
console.log(Comparador(1,1))

/*2. Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.
*/

const Saludar = (name) => `Hola, ${name}`

console.log(Saludar("Ana"))

/*
3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
(recuerda usar prompt).
*/

// let nombre = prompt("Dime tu nombre")

const SaludarPrompt = (name) => `Hola, ${name}`

console.log(SaludarPrompt(nombre))

/*
4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
(recuerda pasar de String a double con parseDouble). Usa la constante PI.
*/

const CircleArea = (radio) => {
  resultado = Math.PI * (radio * radio)
  return resultado
}

console.log(CircleArea(3.5))

/*
5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
debemos indicarlo.
*/

const EsPar = (number) => {
  if (number % 2 == 0) {
    resultado = `${number} es par`
  } else {
    resultado = `${number} es impar`
  }
  return resultado
}

console.log(EsPar(3))

/*
6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
calcule el precio final con IVA. El IVA será una constante que sera del 21%
*/

const CalculaIVA = (precio, iva = 0.21) => {
  resultado = precio * iva + precio
  return resultado
}
console.log(CalculaIVA(10))

/*
7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.
*/
let maxNum = 100
let i = 0

while (maxNum > i) {
  i++
  console.log(i)
}

/*
8. Haz el mismo ejercicio anterior con un bucle for.
*/

for (let index = 1; index < maxNum + 1; index++) {
  console.log(index)
}

/*
9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle
que desees.
*/
for (let index = 1; index < maxNum +1; index++) {
  if(index %6 == 0)
 { console.log(index)}
}

/*
10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.
*/
let ventas = prompt("introduzca número de ventas")
let res = 0

for (let index = 1; index <= ventas; index++) {
  i = prompt(`venta ${index}`)
  res += parseInt(i)
}
console.log(res)

/*
11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
o no. Usa un switch para ello.
*/
let dia = prompt("dime un día de la semana").toLowerCase().trim()

switch (dia) {
  case "sabado":
    console.log("es fin de semana")
    break
  case "domingo":
    console.log("es fin de semana")
    break
  default:
    console.log("es dia laboral")
    break
}

/*
12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
condición de salida (3 intentos y si acierta sale, aunque le queden intentos).
*/

let contraseña = "croqueta"
let resultado = ""

for (let index = 1; index <4 ; index++) {
  resultado = prompt("introduzca contraseña")
   if(resultado == contraseña){
    console.log("Enhorabuena")
    break
   }
   if (index === 3){
    console.log("se han acabado los intentos")
   }else{
    console.log('sigue probando')
   }
}

//Pirámide

let filas = 5
for (let i = 1; i <= filas; i++) {
    let espacios = '.'.repeat(filas - i)
    let asteriscos = '*'.repeat(2 * i - 1)
    console.log(espacios + asteriscos + espacios)
}

/*
13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
aritmético (String), según este último se realizará la operación correspondiente. Al final
mostrará el resultado en un cuadro de diálogo.
Los signos aritméticos disponibles son:
+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1o operando como base y 2o como exponente.
%: módulo, resto de la división entre operando1 y operando2.
*/

const CalculadoraInversa = (operador1, operando, operador2) => {
  if (operando === "^") {
    operacion = Math.pow(operador1, operador2)
  } else {
    operacion = operador1 + operando + operador2
  }
  resultado = eval(operacion)
  return resultado
}

console.log(CalculadoraInversa(3, "+", 3))
console.log(CalculadoraInversa(1, "/", 3))
console.log(CalculadoraInversa(3, "%", 3))
console.log(CalculadoraInversa(3, "^", 3))
