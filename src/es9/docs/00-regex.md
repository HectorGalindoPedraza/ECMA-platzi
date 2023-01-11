## Expresiones regulares

Las expresiones regulares o RegEx (regular expressions) son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente y están presentes en todos los lenguajes de programación.

En JavaScript se crea este patrón entre barras inclinadas (/patron/) y se utiliza métodos para hacer coincidir la búsqueda.

```javascript
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
```

