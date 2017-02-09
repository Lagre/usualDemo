$(function() {
	var timer;
	$(".tab-box li").each(function(index) {
		$(this).mouseenter(function() {
			var that = $(this);
			timer = setTimeout(function() {
				$(".tab-box .tab-active").removeClass('tab-active');
				that.addClass('tab-active');

				$(".content-box .content-active").removeClass('content-active');
				$(".content-box div").eq(index).addClass('content-active');
			},300);
		}).mouseout(function() {
			clearTimeout(timer);
		});
	});

// 以下代码的功能实现需在服务器下进行
	$(".tab-second-box li").each(function(index) {
		$(this).click(function() {
			$(".tab-second-box .tab-active").removeClass('tab-active');
			$(this).addClass('tab-active');

			var loadContent;
			switch(index) {
				case 0 :
					loadContent = "tabLoad.html";
					break;
				case 1 :
					break;
				case 2 :
					break;
			}
			$("#ajax-content").load(loadContent);
		});
	});
});