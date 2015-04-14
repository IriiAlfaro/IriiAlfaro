window.onload = function () {
    var appPortfolio = {};
    
    appPortfolio.administrador = function () {


        return {
            //Función que valida el formulario
            validar: function(){
            var name = document.getElementById("name-contact").value;
            var subject = document.getElementById("subject-contact").value
            console.log(name);
                if ( name  == "" && subject == "" ) {
                    document.getElementById("result").innerHTML = "Contenido no válido";
                    console.log(name);
                }
            },

            //Función que determina en que link se esta ubicado en la página
            active: function(){
                for (var i = 0; i < document.links.length; i++) {
                    if (document.links[i].href == document.URL) {
                        document.links[i].className = 'active';
                    }
                }
            }           
        }
    }();
try{
   document.getElementById("bttn-submit").onclick= function(){
        appPortfolio.administrador.validar();
    }  
}
catch(e){
 console.log(e);
}  

    appPortfolio.administrador.active();
}
    