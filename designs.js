// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, color;
// This reads the user input(grid with and height)
$('#sizePicker').submit(function (event) {
	
	height = $('#inputHeight').val();
	width = $('#inputwidth').val();
	makeGrid(height, width);
	event.preventDefault();
});

// makeGrid function with two parameter to generate the grid
function makeGrid(rows, cols) {


	$('tr').remove();

	for (var i = 1; i <= rows; i++) {
		$('#pixelCanvas').append('<tr id=table'+i+'></tr>');
		for (var j = 1; j <= cols; j++) {
			$('#table'+i).append('<td></td>');
		}
	}

	// This colors the grid
	$('td').click(function() {
		color = $('#colorPicker').val();
		$(this).attr('style') ? $(this).removeAttr('style') : $(this).attr('style', 'background-color:'+color);
	});

}
