```Promise.any()``` es otra forma de manejar varias promesas , que **retornará la primera promesa que sea resuelta** y rebotará si todas las promesas son rechazadas.
```javascript
const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.any([promise1, promise2, promise3])
	.then(response => console.log(response)) // promise2
	.catch(error => console.log(error))
```
