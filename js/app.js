$(document).ready(function() {
	$('#simple-menu').sidr();
	newItem();
	reset();
	menuAddItem();
	searchList();
/*
*DONE* Insert Enter Button to input new paragraph (item) *DONE*
	When Enter button is pressed down inside of
	the .new-item div, take that item value and
	ADD it to the top of the list. 
	
*DONE* Figure out how to add new items to list div *DONE*
	When addItem() is called, it will take the value in the
	.new-item div and paste the value to a new <p></p> tag 
	for the .list div. The new value will be added to the 
	top of the .list div and push the rest of the values
	down.
	
*DONE* Incorporate full reset code *DONE*
	When the #reset-button is clicked, (pressDown), the entire
	list inside of the .list class will become empty.
	
*DONE* Make sure reload never occurs due to possible list reset *DONE*

*Done* Consider incorporating menu on side *Done*
	Allow user to reset/add new item by using the side menu

*Done* Implement Search Functionality *Done*
	
--- Figure out how to add strikethrough/delete icons ---
	addItem() will also need to add a button to each side
	of the new item that is listed.
	|
	--> Develop the functionality of the X and Check button
	on each side. 
	
--- Kill ability to write tags for simple cross site attacks --- 
	
--- Incorporate pushing the footer down as the list expands ---
	Set a miniumum height for the middle section,
	calculate the current height of the middle section,
	if it is higher than the minimum, push the footer down.
	Then set the minimum height to current value.
	
	
--- Address item name overflow in space provided ---

--- Consider implementing some kind of sharing capability ---
*/
});
// If a reload is attempted, users will be warned of losing their list.
window.onbeforeunload = function(e) {
  return 'If you reload, you will lose your shopping list.';
};
// Function allows users to add a new item via input bar + enter key
function newItem() {
	$('.new-item').keydown(function(ent) {
		if (ent.which == 13) {
			//Add new item to the list
			addItem();
			//Reset input field back to placeholder
			$(this).val('');
		}
	});
}
// Function animates the new item to the list.
function animateAdd(itemname) {
	$('.list').prepend('<p class="top-list">' + itemname + '</p>');
	$('.top-list').css({
		"opacity": "0",
		"margin-top": "-20px"
	}).animate({
		opacity: 1,
		marginTop: "10px",
	}, {
		duration: 'slow',
		queue: false}).removeClass(); //Only new items fade in.
}
// Function takes the value inputted and makes it into a new item	
function addItem() {
	var itemnew = $('.new-item').val();
	if (itemnew != '') {animateAdd(itemnew)} 
}
//Function allows user to completely reset the list
function reset() {
	$('.reset-list').mousedown(function() {
		//Consider jQuery.confirm
		if(confirm('If you click OK, your list will reset')) {
			$('.list').fadeOut("medium", function() {
			$('.list').empty().fadeIn("fast");
			});
		}
		else {
			jQuery.noop();
		}
	})
}
//Function allows user to add a new item from the menu
function menuAddItem() {
	$('.new-item-menu').mousedown(function() {
	var menuitem = prompt("What would you like to add to the list?");
		if (menuitem != '' || menu != null) {animateAdd(menuitem)} 
	});
}
//Function allows user to search their list
/* Sourced from: http://www.designchemical.com/blog/index.php/jquery/live-text-search-function-using-jquery/ */
function searchList() {
	$('.search').mousedown(function() {
	var lookforitem = prompt("What would you like to look for in your list?");
	$('.list p').each(function(){
		if ($(this).text().search(new RegExp(lookforitem, "i")) < 0) {
			$(this).fadeOut();
		}
		else {
			$(this).show();
		}
	})
		})
	//If empty, announce that you could not find it.
}




/*//Function Below creates a string of spaces. Used to check with inputs.
function spacebarSentence() {
	var spacebarstring = '';
	for (var i=0; i < 100; i++) {
		spacebarstring + ' ';
		return spacebarstring;
	}
}*/
		