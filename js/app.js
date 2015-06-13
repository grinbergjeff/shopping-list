$(document).ready(function() {
	$('#simple-menu').sidr();
	newItem();
	reset();
	menuAddItem();
	searchList();
	strike();
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
*DONE* Consider incorporating menu on side *DONE*
	Allow user to reset/add new item by using the side menu
*DONE* Implement Search Functionality *DONE*
*DONE* Kill ability to write tags for simple cross site attacks *DONE* 
*DONE* Incorporate pushing the footer down as the list expands *DONE*
	
--- Figure out how to add strikethrough/delete icons ---
	addItem() will also need to add a button to each side
	of the new item that is listed.
	|
	--> Develop the functionality of the X and Check button
	on each side. 
	
--- Address item name overflow in space provided ---
--- Consider implementing some kind of sharing capability ---   
	Since I don't have access to servers, what if I could 	save the html file and email the folder as a link?
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
	itemnew = escapeHtml(itemnew);
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
			menuitem = escapeHtml(menuitem);
		if (menuitem != '' || menu != null) {animateAdd(menuitem)} 
	});
}
//Function allows user to search their list
/* Sourced from: http://www.designchemical.com/blog/index.php/jquery/live-text-search-function-using-jquery/ */
function searchList() {
	$('.search').mousedown(function() {
	var lookforitem = prompt("What would you like to look for in your list?");
		if(lookforitem != null) {
		$('.list p').each(function(){
			if ($(this).text().search(new RegExp(lookforitem, "i")) < 0) {
				$(this).fadeOut();
			}
			else {
				$(this).show();
			}
		})
		}
		})
	//If empty, consider asking if user wants to add it
}
//Function to strikethrough
function strike() {
	$('.checkicon').mousedown(function() {
		if ($(this).parent().hasClass('strikethrough')) {
			$(this).parent().removeClass('strikethrough')/*.css({
			'background-color': '#67727A',
			'border': '2px solid #67727A',
			'text-decoration': 'none'})*/;
		}
		else {
			$(this).parent().addClass('strikethrough')/*.css({
			'background-color': '#bdd879',
			'border': '2px solid #bdd879',
			'text-decoration': 'line-through'})*/;
		}
		})
}
//Function to delete the row
function deleteitem() {
	
}
//Speedbump the ability to incorporate tags inside input
//Sourced from CodeDisqus.
function escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}