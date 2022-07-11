/*AL HACER CLIK EN CUALQUIER PARTE DE LA TABLA NOS MUESTRA EN CONSOLA EL CONTENIDO*/
let celda= document.querySelectorAll("td");
celda.forEach(function(td){
	td.addEventListener('click',function (){
		console.log(this);
	}
	)
	}
	)
	/*SCRIPT PARA OBTENER DE LOS SELECTORES CLOSE LUEGO RECORRIENDOLOS Y EJECUTANDO FUNCION QUE MOSTRARA CADA 
	VEZ QUE APREEMOS CERRAR EN LAS PAGINAS 1 Y 2 UN DATO EN CONSOLA CASI IMPERSEPTIBLE*/
	
	let link= document.querySelectorAll(".close"); /*OBTENEMOS SELECTORES*/
	link.forEach(function(link){

   
     link.addEventListener("click",function(ev){
        ev.preventDefault();
		let content1 = document.querySelector(".content1");
	content1.classList.remove("animate__fadeInDown");
        content1.classList.remove("animate__animated");

        content1.classList.add("animate__fadeOutUp");
        content1.classList.add("animate__animated");
		setTimeout(function(){
		location.href = "../index.html";
		},600);
			
    
    });
});
	
	/*POR ULTIMO SE AGREGO UN EVENTO CLICK  A CADA SELECTOR Y UN MENSAJE*/
	
	/*ELIMINAMOS CLASE DE ICONOS ESTRELLAS CON JAVASCRIPT SE PRUEBA Y PONE COMO COMENTARIO FUNCIONA OK*/
	
	/*
	let iconos= document.querySelectorAll("i");
	iconos.forEach(function(icono){
		icono.classList.remove("fa-star");}
		); 
	*/	
	/* AGREGAMOS Y QUITAMOS ANIMACION DE CONTENT1 PAGINAS 1 Y 2 */
	