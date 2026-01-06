let nombre = prompt("Ingrese su nombre: ");
let Edad = prompt("ingrese su edad");
Edad = parseInt(Edad);

while(isNaN(Edad)){ /* Mientras Edad no sea un número, seguirá pidiendo la información */
    Edad = prompt("La edad ingresada es inválida, ingrese su edad: ");
    Edad = parseInt(Edad)
}
if (Edad < 18){
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`)
} else{
    alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`)
}