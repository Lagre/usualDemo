$(function() {
	var carProducorSelect = $("#car-producor"),
		carTypeSelect = $("#car-choice"),
		wheelTypeSelect = $("#wheel-choice");

	carProducorSelect.change(function() {
		var proValue = $(this).val();
		if(proValue == "") {
			carTypeSelect.parent().hide();
			wheelTypeSelect.parent().hide();
			carProducorSelect.next().hide();
		} else {
			
		}

	});

	carTypeSelect.change(function() {
		
	});

	wheelTypeSelect.change(function() {
		
	});
});