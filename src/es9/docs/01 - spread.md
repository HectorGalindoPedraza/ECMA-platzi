## Propiedades de propragación

Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el spread operator. Sirve para crear nuevos objetos a partir de otros.

### Crear copias de objetos utilizando las propiedades de propragación

Semejante a crear copias de arrays utilizando el operador de propagación, se puede realizar copias de objetos en un solo nivel mediante las propiedades de propagación.

De esta manera el segundo objeto tendrá una referencia en memoria diferente al original.

```javascript 
const objetoOriginal = {a: 1, b: 2} 
const objetoReferencia = objetoOriginal 
const objetoCopia = {...objetoOriginal} 
objetoReferencia === objetoOriginal // true 
objetoOriginal === objetoCopia // false
```
  
### Cuidado con la copia en diferentes niveles de profundidad

El operador de propragación sirve para crear una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia en la copia y en el original.
```javascript
const original = { datos: [1, [2, 3], 4, 5] } 
const copia = { ...original } 

original === copia // false 
original["datos"] === copia["datos"] // true
```

La manera de solucionar esto es más compleja, tendrías que utilizar el operador de propagación para cada nivel de profundidad.

Sin embargo, recientemente salió una forma de crear una copia profunda con [StructuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone). Aunque es una caracteristica muy reciente, así que revisa que navegadores tienen soporte.
```javascript
const original = { datos: [1, [2, 3], 4, 5] }
const copia = structuredClone(original) 

original === copia // false 
original["datos"] === copia["datos"] // false
```
