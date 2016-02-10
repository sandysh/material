		$(document).ready(function(){
			$(".heatmap-site").click(function(){
		        $("#heatmap-content").load("heatmap-site.html");
		        $.getScript('js/heatmap.js');
		       //alert('Trigger clicked');
		    });
		 });
