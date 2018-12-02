function loadacercade(){
  
}





function loaddetrasdecamaras(){
    var rankingitems="";  
    /*la variable data fue previamente inicializada y declarada con datos en la seccion de data
    */ 
    for(let i=0;i<data.length;i++){
      //busca el dato en esa posicion
       let thisdata=data[i];
       //se usan las `` para asi crear una string multitinea y poder usar los ${} como placeholder para meterle datos en ese
       //lado de el dato y esos elementos se van agregando a ranking items
       rankingitems+= `<div class="col s12 m6 ">
          
          <iframe class="hoverable center-align" src="https://www.youtube.com/embed/${thisdata.link.toString().split("=")[1]}" width="100%"   height="500px" style="margin-top:15px;margin-botton:15px;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  >
          </iframe>
          </div>
            `
    } 
    //todos los elementos generados le son asignados a el contenedor previamente declarado en el html
     document.getElementById("contenedoritems").innerHTML+=rankingitems;

}


function loadindex(){
          //se buscan todos los elementos con la clase slider
    var elems = document.querySelectorAll('.slider');
    //se inicializan todos los componentes de materialize que contengan la criteria
    var instances = M.Slider.init(elems);

}

function loadranking(){


    var rankingitems="";
      /*la variable data fue previamente inicializada y declarada con datos en la seccion de data
    */ 
  for(let i=0;i<data.length;i++){
     //busca el dato en esa posicion
     let thisdata=data[i];
      //se usan las `` para asi crear una string multitinea y poder usar los ${} como placeholder para meterle datos en ese
       //lado de el dato y esos elementos se van agregando a ranking items
     rankingitems+= `  <tr>
            <td>${i+1}</td>
            <td><img  style="height:120px;width:90px;" src="${thisdata.imagen}"></td>
            <td>${thisdata.titulo}</td>
            <td>${thisdata.porcentaje}</td>
          </tr> 
          `
 
  }
   //todos los elementos generados le son asignados a el contenedor previamente declarado en el html
    document.getElementById("listarankings").innerHTML+=rankingitems;




}

function loadtrailers(){



    var rankingitems="";
     /*la variable data fue previamente inicializada y declarada con datos en la seccion de data
    */ 
    for(let i=0;i<data.length;i++){
        //busca el dato en esa posicion
       let thisdata=data[i];
        //se usan las `` para asi crear una string multitinea y poder usar los ${} como placeholder para meterle datos en ese
       //lado de el dato y esos elementos se van agregando a ranking items
       rankingitems+= `<div class="col s12 m6 ">
          
          <iframe class="hoverable center-align" src="https://www.youtube.com/embed/${thisdata.link.toString().split("=")[1]}" width="100%"   height="500px" style="margin-top:15px;margin-botton:15px;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  >
          </iframe>
          </div>
            `
   
    }
     //todos los elementos generados le son asignados a el contenedor previamente declarado en el html
      document.getElementById("contenedoritems").innerHTML+=rankingitems;

}



function loadregistro(){

  $("#campo1").fadeOut(0);
  $("#campo2").fadeOut(0);
  $("#campo3").fadeOut(0);
  $("#campo4").fadeOut(0);
  $("#campo5").fadeOut(0);
  $("#boton1").fadeOut(0);



  $("#campo1").fadeIn(500);
  $("#campo2").fadeIn(1000);
  $("#campo3").fadeIn(1500);
  $("#campo4").fadeIn(2000);
  $("#campo5").fadeIn(2500);
  $("#boton1").fadeIn(3000);





}


function loaddedicatorias(){
  
  $("#imgjuan").fadeOut(0);
  $("#textojuanca").fadeOut(0);
  $("#imgjuan").fadeIn(1800);
  $("#textojuanca").fadeIn(800);
}


function loadacercade(){



  $("#logocinefilo").fadeOut(0);
  $("#textocinefilo").fadeOut(0);
  $("#logocinefilo").fadeIn(1800);
  $("#textocinefilo").fadeIn(800);
}


function loadgaleria(){

   

    var rankingitems="";
      /*la variable data fue previamente inicializada y declarada con datos en la seccion de data
    */ 
    for(let i=0;i<data.length;i++){
       //busca el dato en esa posicion
       let thisdata=data[i];
        //se usan las `` para asi crear una string multitinea y poder usar los ${} como placeholder para meterle datos en ese
       //lado de el dato y esos elementos se van agregando a ranking items
       rankingitems+= `<div class="col s12 m6 l4 xl3"  >
          
          <img class="materialboxed hoverable" data-caption="${thisdata.descripcion}"  height="500px" width="100%" style="margin:10px;" src="${thisdata.imagen}">
          </div>
            `
   
    }
     //todos los elementos generados le son asignados a el contenedor previamente declarado en el html
      document.getElementById("contenedoritems").innerHTML+=rankingitems;
      //se inicaliza el componente de materialize con todos los elementos que contengan la clase .materialboxed
      M.Materialbox.init(document.querySelectorAll('.materialboxed'));
}




