"use strict"

$(document).ready(function() {

	$('form').on('submit',function(event) {
		event.preventDefault(); 

		var ajouter = $('input[name="ininput"]').val(); 

		$('ul').append('<li class="liste"><input class="clicbox" type="checkbox"/><button class="boutonefface">X</button>'+ ajouter + '</button></li>');
		compteur();

	});


	$('ul').on('click', '.clicbox', function() {
		$(this).parent().toggleClass('barre'); 
		compteur();
	});

	$('ul').on('click', '.boutonefface', function() {
		$(this).parent().remove();
		compteur();
	});


	$('#tous').click(function() {
		$('.liste').show();

	});


	$('#finis').click(function() {
		$('.liste').hide();
		$('.barre').show();

	});


	$('#afaire').click(function() {
		$('.liste').show();
		$('.barre').hide();

	});



	function compteur() {
		var compt =$('.liste:not(.barre)').length;
		if (compt<=1){
			$('.restant').html("il reste" + " " + compt + " " + "todo à faire");
		}	
		else{
			$('.restant').html("il reste" + " " + compt + " "  + "todos à faire");
		}

	};

});

	












