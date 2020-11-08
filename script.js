function handleClick(){
	var side_element = document.getElementById("side-bar");
	side_element.classList.toggle("slds-show_small");
	side_element.style.background = "rgb(48, 48, 48)";
	document.getElementById("side-bar").style.width = "80%";
	var main_element = document.getElementById("main-bar");
	main_element.classList.toggle("slds-show_small");
}