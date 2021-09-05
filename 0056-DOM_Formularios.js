

/*
* form
* values
*/


(function(win, doc){
	'use strict';

	
	$button = doc.querySelector('#button');


	// click
	$button.addEventListener('click', function(event){

		// cancelando o reload
		// para de enviar o formulario
		event.preventDefault(); 

		console.log('click in btn');
	}, false);



	// submit form
	$button.addEventListener('submit', function(event){

		// cancelando o reload
		// para de enviar o formulario
		event.preventDefault(); 

		console.log('click in btn');
	}, false);


})(window, document);
