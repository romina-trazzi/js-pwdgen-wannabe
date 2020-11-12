
/*=============================================
    =           JAVASCRIPT CODE          =
=============================================*/



var name = prompt("Qual è il tuo nome?");
var surname = prompt("Qual è il tuo cognome?");

alert("Ciao " + name + surname);

var age = prompt("Quanti anni hai?");
var color = prompt("Qual è il tuo colore preferito?");

document.getElementById("result").innerHTML = name + surname + age + color + "20";


// Forma breve 

// result.innerHTML = name + age + color + "20";



