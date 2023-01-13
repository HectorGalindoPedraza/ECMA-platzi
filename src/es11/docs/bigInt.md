#### Big Int, enteros muy grandes
El nuevo dato primitivo ```bigint``` permite **manejar números muy grandes.** Existen dos formas de crear un ```bigint```: el número entero seguido de ```n``` o mediante la función ```BigInt``` 
```javascript
const number1 = 45n;
const number2 = BigInt(45);
typeof 45n // 'bigint'
```
JavaScript tiene límites numéricos, un maximo ```Number.MAX_SAFE_INTEGER``` y un mínimo ```Number.MIN_SAFE_INTEGER``` .
```javascript
const max = Number.MAX_SAFE_INTEGER;
const min = Number.MIN_SAFE_INTEGER;
console.log(max) // 9007199254740991
console.log(min) // -9007199254740991
```
Se añade la misma cantidad a ambos tipos de datos, sin embargo, el tipo numérico da un resultado diferente al esperado.
