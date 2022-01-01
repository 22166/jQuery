			$(".menuElements").hover(function(){
				$(this).addClass("highlightedButton");
				
				}, function(){
			
				$(this).removeClass("highlightedButton");
			});
			
			$(".menuElements").click(function(){
				var color, hexValue, displayCount = 0;
				
				$(this).toggleClass("active");
				$(this).removeClass("highlightedButton");	
				
				htmlColor = ($("#htmlActive").css("background-color"));
				cssColor = ($("#cssActive").css("background-color"));
				jsColor = ($("#jsActive").css("background-color"));
				outputColor = ($("#outputActive").css("background-color"));
				
				if( htmlColor == "rgb(232, 242, 255)")
				{
					$("#htmlInput").css("display", "block");
					displayCount++;
				}
				else
				{
					$("#htmlInput").css("display", "none");
				}
				
				if( cssColor == "rgb(232, 242, 255)")
				{
					$("#cssInput").css("display", "block");
					displayCount++;
				}
				else
				{
					$("#cssInput").css("display", "none");
				}
				
				if( jsColor == "rgb(232, 242, 255)")
				{
					$("#jsInput").css("display", "block");
					displayCount++;
				}
				else
				{
					$("#jsInput").css("display", "none");
				}
				
				if( outputColor == "rgb(232, 242, 255)")
				{
					$("#outPut").css("display", "block");
					displayCount++;
				}
				else
				{
					$("#outPut").css("display", "none");
				}
				
				if (displayCount == 4)
				{
					$("#htmlInput").css("width", "24%" );
					$("#cssInput").css("width", "24%" );
					$("#jsInput").css("width", "24%" );
					$("#outPut").css("width", "24%" );
				}
				
				if (displayCount == 3)
				{
					$("#htmlInput").css("width", "32%" );
					$("#cssInput").css("width", "32%" );
					$("#jsInput").css("width", "32%" );
					$("#outPut").css("width", "32%" );
				}
				
				if (displayCount == 2)
				{
					$("#htmlInput").css("width", "48%" );
					$("#cssInput").css("width", "48%" );
					$("#jsInput").css("width", "48%" );
					$("#outPut").css("width", "48%" );
				}
				
				if (displayCount == 1)
				{
					$("#htmlInput").css("width", "96%" );
					$("#cssInput").css("width", "96%" );
					$("#jsInput").css("width", "96%" );
					$("#outPut").css("width", "96%" );
				}
				
			});
			
			$("textarea").on('change keyup paste', function() {
				$("#outPut").contents().find("html").html("<html><head><style type='text/css'>" + /* Inside an HTML of an iframe, the whole HTML page has been created */ 
				$("#cssInput").val() + 
				"</style></head><body>" +
				$("#htmlInput").val() +
				"</body></html>");
				
				document.getElementById("outPut").contentWindow.eval($("#jsInput").val());   /* eval function is used to evaluate javascript string */ 
				
				});