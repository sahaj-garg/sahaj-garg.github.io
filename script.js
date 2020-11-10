function openSidebar(){
	var side_element = document.getElementById("side-bar");
	side_element.classList.remove("slds-show_small");
	var hamburger = document.getElementById('hamburger');
	var close_menu = document.getElementById('close-menu');
	hamburger.classList.add('slds-hide');
	close_menu.classList.remove('slds-hide');
	close_menu.classList.add('slds-hide_small');
}

function closeSidebar(){
	var side_element = document.getElementById("side-bar");
	side_element.classList.add("slds-show_small");
	var hamburger = document.getElementById('hamburger');
	var close_menu = document.getElementById('close-menu');
	hamburger.classList.remove('slds-hide');
	close_menu.classList.add('slds-hide');
	close_menu.classList.remove('slds-hide_small');
}

function show_card_view(){
	
}