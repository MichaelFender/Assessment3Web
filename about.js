console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been successfully submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

////////////////////

function mouseOver(){
	alert('Actions speak louder than words, and yours tell an incredible story.');
}