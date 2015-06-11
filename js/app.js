$(document).ready(function() {
<<<<<<< HEAD
newItem();
=======

>>>>>>> 9757ace1efe119b7c1f297e3b0eb95887307a581
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
	
*/
});
function newItem() {
<<<<<<< HEAD
	$('.new-item').keydown(function(ent) {
		if (ent.which == 13) {
			console.log('Enter key is hit!');
=======
	$('.new-item').keyDown(function(ent) {
		if (ent.which == 13) {
>>>>>>> 9757ace1efe119b7c1f297e3b0eb95887307a581
			//Add new item to the list
			addItem();
		}
	});
<<<<<<< HEAD
}
=======
});
>>>>>>> 9757ace1efe119b7c1f297e3b0eb95887307a581
function addItem() {
	var itemnew = $('.new-item').val();
	$('.list').prepend('<p> itemnew </p>');
}
