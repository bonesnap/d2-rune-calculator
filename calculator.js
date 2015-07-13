function clear_runes()
{
	$('input[type=text]').val('').css({'background-color' : '#FFF', 'border-color' : '#DDD'}).first().focus();
	$('span').html('');
}

function reset_runes()
{
	$('span').each(function()
	{
		$(this).prev('input[type=text]').val($(this).html()).css({'background-color' : '#FFF', 'border-color' : '#DDD'});
		$(this).html('');
	});
	$('#1').focus();
}

function calculate_runes()
{
	var runes = $('input[type=text]');

	//Sets any empty runes to 0 and copies its original value to the next span tag
	runes.each(function()
	{
		if($(this).val().length == 0)
		{
			$(this).val('0');
		}

		$(this).next('span').html($(this).val());

	});
	
	for(var i = 0; i < runes.length - 1; i++)
	{
		var count = 0;
		
		if(runes[i].value == 0)
		{
			continue;
		}
		
		//The number of the next level of rune made
		count = (i < 20) ? Math.floor(runes[i].value / 3) : Math.floor(runes[i].value / 2);

		//Set the current rune to the remainder
		runes[i].value -= (i < 20) ? count * 3 : count * 2;
		
		//Add value to the next rune
		if(count > 0 && i != runes.length)
		{
			runes[i + 1].value = (count + parseInt(runes[i + 1].value));
		}
	}

	for(i = 0; i < runes.length; i++)
	{
		if(runes[i].value != 0)
		{
			$('#rune' + (i + 1)).css(
			{
				'background-color': '#7AD77A',
				'border':           '1px solid #000000'
			});
		}
	}
}

function get_gomule()
{
	$('.gomule').load('RunesReport.html table:eq(100)', function()
	{
		$(this).find('tr td:first-child').each(function(index)
		{
			$('#rune' + (index + 1)).val($(this).html());
		});

	}).load('RunesReport.html table:eq(101)', function()
	{
		$(this).find('tr td:first-child').each(function(index)
		{
			$('#rune' + (index + 12)).val($(this).html());
		});

	}).load('RunesReport.html table:eq(102)', function()
	{
		$(this).find('tr td:first-child').each(function(index)
		{
			$('#rune' + (index + 23)).val($(this).html());
		});
	});
}

$(document).ready(function()
{
	$('input[type=number]').change(function(event)
	{
		if($(this).val() == '0')
		{
			$(this).val('');
		}

	}).keydown(function(event)
	{
		// Allow: backspace, delete, tab
		if($.inArray(event.keyCode, [46, 8, 9]) !== -1 ||
				// Allow: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) ||
				// Allow: Ctrl+C
			(event.keyCode == 67 && event.ctrlKey === true) ||
				// Allow: Ctrl+X
			(event.keyCode == 88 && event.ctrlKey === true) ||
				// Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39))
		{
			return;
		}

		if((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105))
		{
			event.preventDefault();
		}
	});
});