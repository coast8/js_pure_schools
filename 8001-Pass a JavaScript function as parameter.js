


// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//
// tutorial 1
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

function f1(func){
	return func();
}

function f2(){
	return 'return f2'
}

// execute
console.log(f1(f2))





// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//
// tutorial 2
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// https://stackoverflow.com/questions/13286233/pass-a-javascript-function-as-parameter
addContact(entityId, refreshContactList);

function addContact(id, refreshCallback) {
    refreshCallback();
    // You can also pass arguments if you need to
    // refreshCallback(id);
}

function refreshContactList() {
    alert('Hello World');
}

// execute
addContact(1, refreshContactList);

