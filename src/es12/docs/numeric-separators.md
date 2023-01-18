## Separadores numéricos
Los separadore numéricos ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el caracter guien bajo (```_```) para **separar las cifras**, y no afecta a la ejecución del programa.
Lo ideal es separar cada 3 cifras, para visualizar los miles, millones, billones, etc.
```javascript
// Baja legibilidad
const numero1 = 3501548945
console.log(numero1) // 3501548945

// Alta legibilidad
const numero2 = 3_501_548_945
console.log(numero2) // 3_501_548_945
```
De esta manera puedes identificar el número rápidamente.
