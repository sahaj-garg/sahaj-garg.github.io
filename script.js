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

function show_card_view(event){
	var table_head = document.getElementById("table-header").classList.add("slds-hide");
	var cards = document.getElementsByClassName("flexbox");

	var to_show = document.getElementsByClassName('card-show');
	var to_hide = document.getElementsByClassName('table-show');
	var to_show_both = document.getElementsByClassName('both-show');

	for(var i=0; i<to_hide.length; i++){
		to_hide[i].classList.add('to_hide');
	}

	for(var i=0; i<to_show.length; i++){
		to_show[i].classList.add('to_show');
	}

	for(var i=0; i<to_show_both.length; i++){
		to_show_both[i].classList.add('to_show');
	}

	for(var i=0; i<cards.length; i++){
		cards[i].classList.add("show_vertical");
		cards[i].classList.add("slds-size-medium_1-of-4");
	}

	var table_ele = document.getElementById("table-view");
	table_ele.style.backgroundColor = "white";
	event.target.style.backgroundColor = "rgb(0, 160, 255)";
}

function show_table_view(event){
	var table_head = document.getElementById("table-header").classList.remove("slds-hide");
	var cards = document.getElementsByClassName("flexbox");

	var to_hide = document.getElementsByClassName('card-show');
	var to_show = document.getElementsByClassName('table-show');
	var to_show_both = document.getElementsByClassName('both-show');

	for(var i=0; i<to_hide.length; i++){
		to_hide[i].classList.remove('to_show');
	}

	for(var i=0; i<to_show.length; i++){
		to_show[i].classList.remove('to_hide');
	}
	
	for(var i=0; i<to_show_both.length; i++){
		to_show_both[i].classList.add('to_show');
	}

	for(var i=0; i<cards.length; i++){
		cards[i].classList.remove("show_vertical");
		cards[i].classList.remove("slds-size-medium_1-of-4");
	}

	var card_ele = document.getElementById("card-view");
	card_ele.style.backgroundColor = 'white';
	event.target.style.backgroundColor = "rgb(0, 160, 255)";
}