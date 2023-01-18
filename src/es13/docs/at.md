### Índices positivos y negativos en *arrays*
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array. El índice 0 es la primera posición.
```javascript
[0,1,2,3, ...., lenght-1]
```
Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del *array*, de derecha a izquierda. El índice -1 es la última posición.
```javascript
[-lenght, ..., -3, -2, -1]
```
### ¿Cómo utilizar el método ```at```
La utilidad más importante de este método es para manejrar **índices negativos.** Algo que no se puede con la notación de corchetes.
```javascript
const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

nombres.at(-1) // "Richard"
nombres[-1] // undefined
nombres.at(-3) // "Ana"
nombres[nombres.length -1] // "Richard"
```
Puedes utilizar la notación de corchetes, pero necesitas obtener la longitud del *array* y restarle una unidad, generando mucho código que puede volverse difícil de leer.
```js
nombres[nombres.length -1] // "Richard"
```
