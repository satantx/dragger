jQuery.fn.dragger = function(options){

	var options = jQuery.extend({
		starClass: 'dragger-start',
		endClass: 'dragger-end'
	},options);

	return this.each(function() {
		var container = $(this);
		container.mousemove(function(e) {
			var pos = $(this).offset(),
			    left = e.pageX - pos.left,
			    width = container.width() - left;
			$('.'+ options.endClass).width(width);
		});
		container.mouseleave(function(e) {
			$('.'+ options.endClass).width('50%');
		});
	});
	
};
