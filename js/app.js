$(document).ready(function() {
	newItem();
	reset();
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
	
--- Figure out how to add strikethrough/delete icons ---
	addItem() will also need to add a button to each side
	of the new item that is listed.
	|
	--> Develop the functionality of the X and Check button
	on each side. 
	
*DONE* Incorporate full reset code *DONE*
	When the #reset-button is clicked, (pressDown), the entire
	list inside of the .list class will become empty.
	
--- Consider incorporating menu on side ---
	Research sidr.
	
--- Incorporate pushing the footer down as the list expands ---

--- Address item name overflow in space provided ---
	
*/
});
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
function addItem() {
	var itemnew = $('.new-item').val();
	if (itemnew != '') {
	$('.list').prepend('<p class="top-list">' + itemnew + '</p>');
	$('.top-list').css({
		"opacity": "0",
		"margin-top": "-20px"
	}).animate({
		opacity: 1,
		marginTop: "10px",
	}, {
		duration: 'slow',
		queue: false}).removeClass();} //Only new items fade in.
}
function reset() {
	$('#reset-list').mousedown(function() {
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