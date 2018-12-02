
var texto1=document.getElementById("campo1");
var texto2=document.getElementById("campo2");
var texto3=document.getElementById("campo3");
var texto4=document.getElementById("campo4");
var texto5=document.getElementById("campo5");
var boton1=document.getElementById("boton1");


function verificarymandar(){
var campo1lleno=false;
var campo2lleno=false;
var campo3lleno=false;
var campo4lleno=false;
var campo5lleno=false;
////////////////////////se comprueban que los campos tengan una cantidad de caracteres adecuada
if(texto1.value.toString().trim().length>5){
campo1lleno=true;
 
}
else{
		////////////M es el objeto de la instancia de los componentes de materialize y el metodo toast pide un objeto el cual debe contener un html 
/////////// ese html es una string y representara el cuerpo de el toast que el toast no es mas que un mensaje que aparece en pantalla como son 
////////////los que aparecen en android al pasar algo que deba ser notificado al usuario
	M.toast({html: 'El nombre debe contener almenos 5 caracteres'})
	}
if(texto2.value.toString().trim().length>5){
	campo2lleno=true;
	 
}else{
		////////////M es el objeto de la instancia de los componentes de materialize y el metodo toast pide un objeto el cual debe contener un html 
/////////// ese html es una string y representara el cuerpo de el toast que el toast no es mas que un mensaje que aparece en pantalla como son 
////////////los que aparecen en android al pasar algo que deba ser notificado al usuario
		M.toast({html: 'El apellido debe contener almenos 5 caracteres'})
	}
if(texto3.value.toString().trim().length>7){
	campo3lleno=true;
 
}
else{
		////////////M es el objeto de la instancia de los componentes de materialize y el metodo toast pide un objeto el cual debe contener un html 
/////////// ese html es una string y representara el cuerpo de el toast que el toast no es mas que un mensaje que aparece en pantalla como son 
////////////los que aparecen en android al pasar algo que deba ser notificado al usuario
	M.toast({html: 'El correo debe contener almenos 7 caracteres'})
	}
if(texto4.value.toString().trim().length>=9){
	campo4lleno=true;
 
}else{
	////////////M es el objeto de la instancia de los componentes de materialize y el metodo toast pide un objeto el cual debe contener un html 
/////////// ese html es una string y representara el cuerpo de el toast que el toast no es mas que un mensaje que aparece en pantalla como son 
////////////los que aparecen en android al pasar algo que deba ser notificado al usuario
		M.toast({html: 'El numero de telefono debe contener almenos 9 caracteres'})
}
if(texto5.value.toString().trim().length>5){
	campo5lleno=true;
	
}else{
		////////////M es el objeto de la instancia de los componentes de materialize y el metodo toast pide un objeto el cual debe contener un html 
/////////// ese html es una string y representara el cuerpo de el toast que el toast no es mas que un mensaje que aparece en pantalla como son 
////////////los que aparecen en android al pasar algo que deba ser notificado al usuario
M.toast({html: 'El mensaje debe contener almenos 5 caracteres'})
	}
if(campo1lleno==true && campo2lleno==true && campo3lleno==true && campo4lleno==true && campo5lleno==true   ){
////////////M es el objeto de la instancia de los componentes de materialize y el metodo toast pide un objeto el cual debe contener un html 
/////////// ese html es una string y representara el cuerpo de el toast que el toast no es mas que un mensaje que aparece en pantalla como son 
////////////los que aparecen en android al pasar algo que deba ser notificado al usuario
  M.toast({html: 'Mensaje enviado'})
  ///////////////////////se limpian los campos una vez se hayan introducido los datos correctamente
  texto5.value="";
  texto4.value="";
  texto3.value="";
  texto2.value="";
  texto1.value="";
}else{
	M.toast({html: 'Por favor llene todos los campos!!'})
}
///boton1.addEventListener("click", verificarymandar)
	
}
