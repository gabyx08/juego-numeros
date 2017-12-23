
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

//Obtener número aleatorio entre 0 y 100
let numeroAdivinar = parseInt((Math.random()*99)+1);
let contadorRespuestas = 0;
let numeroIntentos = 0;
let respuestas = document.getElementById("respuestas").innerHTML;

const obtenerDificultad = ()=> {

	if (document.getElementById("facil").checked == true){
		numeroIntentos =9;
	}
	else if(document.getElementById("intermedio").checked == true){
		numeroIntentos =4;
	}
	else if(document.getElementById("dificil").checked == true){
		numeroIntentos =2;
	}
	console.log(numeroIntentos);

	$("#juego").show();
	$("#botonEmpezar").hide();

}

const adivinar = () =>{
	
	event.preventDefault();																																																						 
	console.log("numeroAdivinar",numeroAdivinar);

	let numeroJugador= document.getElementById("numero").value;
	console.log("numeroJugador",numeroJugador);


	if(numeroIntentos>0){

		if(numeroJugador < numeroAdivinar){
		alert("El numero que buscas es mayor");
		numeroIntentos--;
		$("#numero").val = "";
		console.log("Intentos",numeroIntentos);
		respuestas += `<p> No es ${numeroJugador} . El numero que buscas es mayor.</p>`;
		}
		else if (numeroJugador > numeroAdivinar){
			respuestas += `<p> No es ${numeroJugador} . El numero que buscas es menor.</p>`;
			alert("El numero que buscas es menor");
			numeroIntentos--;
			$("#numero").val = "";
			console.log("Intentos",numeroIntentos);
		}
		else if (numeroJugador == numeroAdivinar){
			alert("We are the champions!!!");
		}
	} else{
		alert("Perdiste HAHA");
	}
}



