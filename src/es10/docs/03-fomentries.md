### Cómo transformar un array de arrays en un objeto
El método ```Object.fromEntries``` devuelve un objeto a partir de un *array* donde sus elementos son las entries en froma ```[propiedad, valor]```.
Se considera la operación inversa de Object.entries()
```javascript
const arrayEntries = [
	['name', 'Andres'],
	['email', 'andres@correo.com'],
	['age', 23]
]

const usuario = Object.fromEntries(arrayEntries)

console.log(usuario)

/*
	{
		name: 'Andres',
		email: 'andres@correo.com',
		age: 23
	}
*/
```
