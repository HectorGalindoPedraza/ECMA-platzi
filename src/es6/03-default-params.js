/* function newUser(name, age, country){
    var name = name || 'Héctor';
    var age = age || 18;
    var country = country || 'Colombia';

    console.log(name, age, country)
}

newUser('Ejemplo', 18, 'Platzi') */

function newAdmin(name = 'Juan', age = 18, country = 'CL'){
    console.log(name, age, country)
}

newAdmin()
newAdmin('Anna', 29, 'PE')