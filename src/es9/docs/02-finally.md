> Las siguientes características de ES9 o ES2018 que aprenderás son:
> método finally para promesas y generadores asíncronos.

## Método finally en promesas
El método ```finally``` para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.
```javascript
promesa()
	.then(response => console.log(response)) // Promesa resuelta
	.catch(error => console.log(response)) // Promesa rechazada
	.finally(() => console.log('Finalzado')) // Código final
```
