$(document).ready(function() {
	newItem();
	searchitem();
	reset();
	menuAddItem();
	deleteitem();
	strike();
	undocheck();
	lockmenu();
});
// If a reload is attempted, users will be warned of losing their list.
window.onbeforeunload = function(e) {
  return 'If you reload, you will lose your shopping list.';
};
//Allow menu to lock on top of browser on scroll down.
$(window).scroll(function(){
      if ($(this).scrollTop() > 25) {
          $('#reset-button').addClass('fixed');
      } else {
          $('#reset-button').removeClass('fixed');
      }
  });
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
	var newitemgen = '<p id="top-list" p class="nostrike">';
	var xspan = '<span class="deleteicon"></span>';
	var checkspan = '<span class="checkicon"></span></p>';
	$('.list').prepend(newitemgen + xspan + itemname + checkspan);
	$('#top-list').css({
		"opacity": "0",
		"margin-top": "-20px"
	}).animate({
		opacity: 1,
		marginTop: "10px",
	}, {
		duration: 'slow',
		queue: false}).removeAttr('p id'); //Only new items fade in.
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
//Function to strikethrough
function strike() {
	$('.list').on('mousedown', '.checkicon', function() {
				$(this).parent().removeClass().addClass('strikethrough');
				$(this).removeClass().addClass('undoicon');
		})
}
//Function to undo checked off item
function undocheck() {
	$('.list').on('mousedown', '.undoicon', function() {
		$(this).parent().removeClass().addClass('nostrike');
		$(this).removeClass().addClass('checkicon');
})
}
//Function to delete the row
function deleteitem() {
	$('.list').on('mousedown', '.deleteicon', function() {
		$(this).parent().fadeOut(300,function() { $(this).remove(); });
})
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
//Function allows user to search their list live
/* Sourced from: http://www.designchemical.com/blog/index.php/jquery/live-text-search-function-using-jquery/ */
function searchitem() {
	$('.new-item').keyup(function() {
	var searchforitem = $(this).val();
		if(searchforitem != null) {
		$('.list p').each(function(){
			if ($(this).text().search(new RegExp(searchforitem, "i")) < 0) {
				$(this).fadeOut();
			}
			else {
				$(this).show();
			}
		})
		}
		})
}

 