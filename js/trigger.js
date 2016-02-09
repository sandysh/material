          $("#category").change(function(){
             $option = document.getElementById('category').value;
             if($option=='general'){
                $(".custom-category").addClass("hide");
                $(".general-category").removeClass("hide");             }
             else{
              $(".general-category").addClass("hide");
              $(".custom-category").removeClass("hide");             }
           });

          $("#criteria").change(function(){
          		$option = document.getElementById('criteria').value;
          		if($option=='country'){
          		 $(".country-based").removeClass('hide');	
          		 $(".visits-based").addClass('hide');	
          		 $(".events-based").addClass('hide');
          		 $(".scroll-based").addClass('hide');		
          		}
          		else if($option=='visits'){
          		 $(".visits-based").removeClass('hide');	
          		 $(".country-based").addClass('hide');	
          		 $(".events-based").addClass('hide');	
          		 $(".scroll-based").addClass('hide');	
          		}
          		else if($option=='events'){
          		 $(".events-based").removeClass('hide');	
          		 $(".country-based").addClass('hide');	
          		 $(".visits-based").addClass('hide');
          		 $(".scroll-based").addClass('hide');		
          		}
          		else if($option=='scroll'){
          		 $(".scroll-based").removeClass('hide');	
          		 $(".country-based").addClass('hide');	
          		 $(".visits-based").addClass('hide');	
          		 $(".events-based").addClass('hide');	
          		}


          });

          $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
          });

		$(document).ready(function(){
			$("#tabs-content").load("triggers.html");
		    $("#triggers-tab").click(function(){
		        $("#tabs-content").load("triggers.html");
		       //alert('Trigger clicked');
		    });

		    $("#actions-tab").click(function(){
		        $("#tabs-content").load("actions.html");
		       //alert('Trigger clicked');
		    });

		    $("#site-tab").click(function(){
		        $("#tabs-content").load("sitemap.html");
		       //alert('Trigger clicked');
		    });
		    $("#advance-tab").click(function(){
		        $("#tabs-content").load("advanceStats.html");
		       //alert('Trigger clicked');
		    });
		    $("#heatmaps-tab").click(function(){
		        $("#tabs-content").load("heatmaps.html");
		       //alert('Trigger clicked');
		    });


		});

