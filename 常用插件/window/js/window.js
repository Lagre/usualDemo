$(function() {
	$("button").each(function(index) {
		$(this).click(function() {
			switch(index) {
				case 0 :
					$(".left-window").show();
					break;
				case 1 :
					$(".center-window").show();
					break;
			}
		});
	});

	$("span").click(function() {
		$(this).parent().parent().hide();
	});
});