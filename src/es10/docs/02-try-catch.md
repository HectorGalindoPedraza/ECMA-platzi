### Parámetro opcional de catch
El parámetro opcional de ```catch```  permite omitir el error si es necesario.
```javascript
try{
	//Manejar el códig
} catch(err){
	// Se utiliza el parámetro 'err'
}

try {
	// Manejar el código
} catch {
	// Manejar el error sin el parámetro.
}
```
Aunque siempre es recomendable manejar el error como parámetro, ya que tiene más información del problema.
