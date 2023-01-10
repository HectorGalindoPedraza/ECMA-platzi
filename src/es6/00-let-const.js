/* var lastName = 'David';
console.log(lastName)
lastName = 'Oscar';
console.log(lastName)

let fruit = 'Apple';
console.log(fruit)
fruit = 'Kiwi';
console.log(fruit)

const animal = 'Dog';
console.log(animal)
animal = 'cat';
console.log(animal) // Error: No se puede reasignar el valor de una constante, ya que como su nombre lo indica es un valor almacenado en memoria de forma constante, esto quiere decir que desde su creacion en el programa hasta el fin del programa su valor no podra ser modificado de ninguna forma.
 */
const fruits = () => {
    if(true){
        var fruit1 = 'apple'; // function scope 
        let fruit2 = 'kiwi'; // block scope
        const fruit3 = 'banana'; // block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits()