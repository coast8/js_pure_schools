


// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//
// IIFE -  Immediately-Invoked Function Expression
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/*

- function performed automatically or immediately
- other executable
- variables are always in the local scope

*/



// REFERENCES
//https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
//http://benalman.com/news/2010/11/immediately-invoked-function-expression/


// esta funcao evita o escopo global
// o conteudo fica restrito





(function(){
	console.log(1+4);
})();

// ou

(function(){
	console.log(1+4);
}());