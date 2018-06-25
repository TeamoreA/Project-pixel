// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, color;

$('#sizePicker').submit(function (event) {
	
	height = $('#inputHeight').val();
	width = $('#inputHeight').val();
	makeGrid(height, width);
	event.preventDefault();
});

function makeGrid(rows, cols) {

// Your code goes here!
	$('tr').remove();

	for (var i = 1; i <= rows; i++) {
		$('#pixelCanvas').append('<tr id=table'+i+'></tr>');
		for (var j = 1; j <= cols; j++) {
			$('#table'+i).append('<td></td>');
		}
	}


	$('td').click(function() {
		color = $('#colorPicker').val();
		$(this).attr('style') ? $(this).removeAttr('style') : $(this).attr('style', 'background-color:'+color);
	});

}
