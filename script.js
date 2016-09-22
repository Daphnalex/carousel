$(document).ready(function(){
	var long = $('.image').length-1;
	console.log("long ="+long);
	var i = long;
	console.log(i);
	

	var suivante = function(){ //Passage à la slide suivante
		if (i>=long){ //On vérifie si la slide active est la dernière. Si oui on retourne à la première slide.
			i = 0;
			$('.image').not($('#lion')).fadeOut(200);//On cache toutes les slides sauf la première.
		}
		else i=i+1;//Sinon on passe à la suivante
	};
	var precedent = function(){ //Passage à la slide précédente
		if (i<=0){ // On vérifie si la slide active est la première. Si oui on retourne à la dernière slide.
			i = long;
		}
		else i = i-1;//Sinon on passe à la précédente
	};

	var cacher = function(){ //On cache la slide
		$('#monCarousel').find('.image:eq('+i+')').fadeOut(500);
	}
	var apparaitre = function(){ //On affiche la slide
		$('#monCarousel').find('.image:eq('+i+')').fadeIn(500);
	}

	$('#gauche').click(function(){
		cacher(); //On cache la slide en cours
		precedent();//On récupère l'index de la slide précédente
		apparaitre();//On affiche la slide précédente
		
	});
	$('#droite').click(function(){
		cacher(); //On cache la slide en cours
		suivante(); //On récupère l'index de la slide suivante
		apparaitre();//On affiche la slide suivante
	});
	setInterval(function(){ //
		setTimeout(3000);
		cacher(); //On cache la slide en cours
		suivante(); //On récupère l'index de la slide suivante
		apparaitre();//On affiche la slide suivante
	},3000)
});