jQuery.fn.dragger = function(options){
	
	var options = jQuery.extend({
		 starClass: 'dragger-start',
		 endClass: 'dragger-end',
		 dragClass: 'drag',
		 drag: true
	},options);

	return this.each(function() {
		var container = $(this);
		var start = container.find('img').eq(0);
		var end = container.find('img').eq(1);
		start.wrap('<div class='+options.starClass+'></div>');
		end.wrap('<div class='+options.endClass+'></div>');
		if (options.drag == true) {
			container.append('<div class='+options.dragClass+'></div>');
			var drag = $('.'+ options.dragClass, container);
		};
		container.mousemove(function(e) {
			var pos = $(this).offset(),
			    left = e.pageX - pos.left,
			    top = e.pageY - pos.top,
			    width = container.width() - left;
			$('.'+ options.endClass, container).width(width);
			if ($(drag).length) {
				drag.css({
					'left': left,
					'top': top
				});
			}
		});
		container.mouseleave(function() {
			$('.'+ options.endClass, container).width('50%');
			if ($(drag).length) {
				drag.css({
					'left': '50%',
					'top': '50%'
				});
			}
		});
	});
	
};
