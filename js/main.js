$(document).ready(function(){
	$('#gallery').ready(function(){
		$.ajax({
			  type: "GET",
			  url: 'js/projects.json',
			  dataType: "json",
			  success:function(data){
			
				dibujaProyectos(data.proyectos);//nombre de mi funcion
				console.log(data);
						
			  },
			  error:function(jqXHR, textStatus, errorThrown) {
				console.log("Text Status:" +textStatus+"\nError:"+errorThrown);
			  }
		});	
	});

	function dibujaProyectos(proyecto){
		var imageProject1 = '';
		var imageProject2 = '';

			imageProject1 += 
		        '<div class="view hover">' +
		            '<img src=' + proyecto[0].img + '/>' +
			        '<div class="mask">' +
		                '<h2>' + proyecto[0].nombre + '</h2>' +
		                '<p>' + proyecto[0].cat + '</p>'+
		                '<a href="project.html" class="info">' + 'Read More' + '</a>' + 
		             '</div>' + //termina mask
	            '</div>' +  //termina view

	            '<div class="view hover">' +
		            '<img src=' + proyecto[1].img + '/>' +
			        '<div class="mask">' +
		                '<h2>' + proyecto[1].nombre + '</h2>' +
		                '<p>' + proyecto[1].cat + '</p>'+
		                '<a href="project.html" class="info">' + 'Read More' + '</a>' + 
		             '</div>' + //termina mask
	            '</div>' +  //termina view

	            '<div class="view hover">' +
		            '<img src=' + proyecto[2].img + '/>' +
			        '<div class="mask">' +
		                '<h2>' + proyecto[2].nombre + '</h2>' +
		                '<p>' + proyecto[2].cat + '</p>'+
		                '<a href="project.html" class="info">' + 'Read More' + '</a>' + 
		             '</div>' + //termina mask
	            '</div>'; //termina view

	            imageProject2 +=

	            '<div class="view hover">' +
		            '<img src=' + proyecto[3].img + '/>' +
			        '<div class="mask">' +
		                '<h2>' + proyecto[3].nombre + '</h2>' +
		                '<p>' + proyecto[3].cat + '</p>'+
		                '<a href="project.html" class="info">' + 'Read More' + '</a>' + 
		             '</div>' + //termina mask
	            '</div>' + //termina view

	            '<div class="view hover">' +
		            '<img src=' + proyecto[4].img + '/>' +
			        '<div class="mask">' +
		                '<h2>' + proyecto[4].nombre + '</h2>' +
		                '<p>' + proyecto[4].cat + '</p>'+
		                '<a href="project.html" class="info">' + 'Read More' + '</a>' + 
		             '</div>' + //termina mask
	            '</div>'+ //termina view


	            '<div class="view hover">' +
		            '<img src=' + proyecto[5].img + '/>' +
			        '<div class="mask">' +
		                '<h2>' + proyecto[5].nombre + '</h2>' +
		                '<p>' + proyecto[5].cat + '</p>'+
		                '<a href="project.html" class="info">' + 'Read More' + '</a>' + 
		             '</div>' + //termina mask
	            '</div>';  //termina view





		// '<img src=' + proyecto[1].img + ' alt="Proyecto Hacienda" />' +
		// '<img src=' + proyecto[2].img + ' alt="Proyecto Hacienda" />' +
		// '<img src=' + proyecto[3].img + ' alt="Proyecto Hacienda" />' +
		// '</div>';

		// imageProject2 += '<div class="projects-images2">'+
		// '<img src=' + proyecto[4].img + ' alt="Proyecto Hacienda" />' +
		// '<img src=' + proyecto[5].img + ' alt="Proyecto Hacienda" />' +
		// '<img src=' + proyecto[6].img + ' alt="Proyecto Hacienda" />' +
		// '<img src=' + proyecto[7].img + ' alt="Proyecto Hacienda" />' +
		// '</div>';

		$('#projects-images1').append(imageProject1);
		$('#projects-images2').append(imageProject2);
	}
//www.developerdrive.com/2015/01/8-simple-css-hover-effects/


});