
function apagar(){
   var contenedor=document.getElementById("miedo");
   /*contenedor.style.visibility="hidden";*/
   contenedor.style.display="none";
}

function prender(){
     var contenedor=document.getElementById("Foto");
     /*contenedor.style.visibility="visible";*/
     contenedor.style.display="block";
}

function apagarPrender(soundobj , Foto){
     var contenedor=document.getElementById(Foto);
     var button=document.getElementById("flato-red-button");
     var thissound=document.getElementById(soundobj);
     thissound.play();
     if(contenedor.style.display=="block" || contenedor.style.display==""){
     	apagar();
     	button.value="";
        thissound.play();
     	

     }else{
     	prender();
     	button.value="";
     	

     }
      


}

