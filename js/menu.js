		$(document).ready(function(){
			// loading the default view
			$("#main-content").load("home.html");
			// home tab click --load home partial view
		    $("#home").click(function(){
		        $("#main-content").load("home.html");
		       //alert('Trigger clicked');
		    });

		    $("#dashboard").click(function(){
		       	var loaded =$('script[src*="/js/dash-chart.js"]').length;
		        console.log(loaded);
		       	if(loaded===0){
		       		$("#main-content").load("dashboard.html");
		       		$.getScript('/js/dash-chart.js',function(script,status){console.log(status);})
		       	}
		       	else{
		       		$("#main-content").load("dashboard.html");
		       		console.log('script already loaded');
		  	       	}
		    });

		    $("#site-stats").click(function(){
		        $("#main-content").load("statistics.html");
		        $.getScript( "js/trigger.js" );
		        $.ajaxSetup({
		          cache: true
		        });
		      });

		    $("#settings").click(function(){
		        $("#main-content").load("settings.html");
		   
		    });

	

		});