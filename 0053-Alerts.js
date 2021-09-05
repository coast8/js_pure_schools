

//  Estas janelas são boqueantes.
// 
//  alert
//  confirm
//
//

(function(win){
	'use strict';

	var del = confirm('Deseja realmente excluir?');

	if(del)
		console.log('OK')
	else
		console.log('NO')
})(window);


// https://www.w3schools.com/js/js_popup.asp
// https://blog.betrybe.com/javascript/javascript-alert/