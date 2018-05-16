var button = document.getElementById('uenter');
var inputu = document.getElementById('uinput');
var ul = document.getElementById('myul')

function isInput(){

	return inputu.value.length > 0;
}
function isInputEnter(event){

	return inputu.value.length > 0 && event.keyCode === 13;
}
function createLi(){
	var txt = inputu.value;
	console.log("Button Clicked"+" " + txt);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(txt));
	ul.appendChild(li)
	inputu.value = "";
}
function addonClick(){
	if (isInput()) {
		createLi();
	}
}
function addonEnter(event){
	if (isInputEnter(event)) {
		createLi()
	}
}
button.addEventListener('click',addonClick());
inputu.addEventListener('keypress',addonEnter(event));