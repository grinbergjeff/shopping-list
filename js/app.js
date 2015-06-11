$(document).ready(function() {
newItem();
/*
--- Insert Enter Button to input new paragraph (item) ---
	When Enter button is pressed down inside of
	the .new-item div, take that item value and
	ADD it to the top of the list.
	
--- Figure out how to add new items to list div ---
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
	
--- Incorporate full reset code ---
	When the #reset-button is clicked, (pressDown), the entire
	list inside of the .list class will become empty.
	
--- Consider incorporating menu on side ---
	Research sidr.
	
--- Incorporate pushing the footer down as the list expands ---
	
*/
});
function newItem() {
	$('.new-item').keydown(function(ent) {
		if (ent.which == 13) {
			console.log('Enter key is hit!');
			//Reset input field back to placeholder
			$('.new-item').val('');
			//Add new item to the list
			addItem();
		}
	});
}
function addItem() {
	var itemnew = $('.new-item').val();
	$('.list').prepend('<p> itemnew </p>').fadeIn('slow');
}
