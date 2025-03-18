// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
// obtenemos el nombre del amigo agregado
function agregarAmigo(){

    let ingresoAmigo = document.getElementById('amigo').value.trim();

    console.log(ingresoAmigo)

    if (ingresoAmigo === ''){ //aqui validamos que se ingrese un nombre 
        alert("Por favor, ingrese un nombre")
        return 
    }

    if (amigos.includes(ingresoAmigo)) {
        alert("Este (a) amigo (a) ya está en la lista");
        return;
     }
       amigos.push(ingresoAmigo)           
       console.log(amigos) 

      document.getElementById('amigo').value = "";  
     
       
      verAmigos();
}
        
function verAmigos(){
    let listaAmigos = document.getElementById("listaAmigos"); //
    listaAmigos.innerHTML = ""; //limpia la lista antes de  de actualizar
    
   // Iterando sobre la lista de amigos
   for (let i = 0; i < amigos.length; i++) {
    let lis = document.createElement('li'); // 
    lis.textContent = amigos[i]; // Asignando el nombre del amigo
    listaAmigos.appendChild(lis); // Agregando el elemento a la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);  //Generamos un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtenemos el amigo sorteado

    document.getElementById('resultado').textContent = "El amigo sorteado es: " + amigoSorteado;
}