# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function (a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // undefined
foo(); // Hola 
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); // Franco
  }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm);
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //1.6666666666666667
/*

se hace la division por que javascript detecta por defecto que es un nuemro aun que sea un string.

*/
"2" * "3" // 6
/*
se hace la multiplicación por que javascript detecta por defecto que es un numero aun que sea un string.
*/
4 + 5 + "px" // 9px
/*
 Se suman los nuemros que daria el resultado de 9 y se concatena con el estring
*/

"$" + 4 + 5 // $9
/*
 Solo se concatenan los datos ya que empieza con un string
*/
"4" - 2 // 2
/*
El resultado es dos ya que javascript detecta que es un numero aun que se un string.
*/
"4px" - 2 // Nan
/*
 se muestra un NaN por que el primero el string posee letras y javascript no puede detectar si es un numero o string
*/
7 / 0 // Infinity
/*
 Cada numero dividido a 0 da error pero aqui muestra infinity
*/
{}[0] // undefined
/*
Mi opinion a esto es que no esta dando ninguna respuesta logia
*/
parseInt("09") // 2

5 && 2 // 2
/* Devuelve el nuemero de la derecha es el primer numero que lee javascript*/
2 && 5 // 5
/* Devuelve el nuemero de la derecha es el primer numero que lee javascript*/
5 || 0
/* Devuelve el numero mayor */
0 || 5
/* Devuelve el numero mayor */
[3]+[3]-[10] //23
/*
se concatenan el los numero dando el resultado 33 luego le resta 10 y el resultado final el 23
*/
3>2>1 // false
/* Ninguno es mayor 3 no es mayor que 2, 2 no es mayor que 1 asi que es falso */
[] == ![] // treue
/*El resultado es true por que uno es igual que otro*/
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); // undefined
  console.log(foo()); // 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
/*
 La salida de este codigo es el numero 2 por que esta definida con una funcion que se puede llemar desde cualquier lugar del codigo 

 la variable (a) tiene un problema que es por su nivel tendria que estar definida de primero y despues de la ejecución
*/
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false);
/*
 En este codigo sucede el siguiente caso primero que nada no hay ninguna salida por consola
 Empecezemos desde la codicional la condicion no se cumple asi que ese codigo no sale a luz ya que el parametro (food) no tiene ningun dato es indefinido
 luego retorna un snack que tambien es indefinido envia es por que no hay una var snack dentro de la funcion
 el getFood(false); solo devuelve un undefined
*/
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
/*
  La salida de Aurelio De Rosa se ejecuta por que se esta llamando al obj luego a la prop y luego a la prodiedad que almacena una funcion y esa esta llamando a una prodiedad global que no esta dentro de la funcion los hacen con un (this).

  Hay una salida undefined, la razon de que esta salida sea indefinida es por que esa funcion no existe en el codigo. 
*/
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();
/*
1: Inicia primero el numero 1 por que esta en el principio de la funcion printing y no esta dentro de un setTimeout
2: Luego inicia el numero 4 por que esta al final de la funcion printing y ademas no esta de un setTimeout
3: Luego inicia el numero 3 por que esta dentro de una funcion setTimeout ademas en su Callback maraca los 0ms 
4: Luego culmina con el ultimo numero que es el 2 por que esta dentro una funcion setTimeout y ademas en su Callback marca 1000ms

La funcion setTimeout vinene por defecto en javascript esta funcion se encarga en darle a los datos un tiempo estimado de salida 
*/
```
