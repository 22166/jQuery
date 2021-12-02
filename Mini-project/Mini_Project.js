	 
			
			
			function isEmail(email) 
			{
			  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			  return regex.test(email);
			}
		
			$("#submit").click(function(){
			
			var errorMessage ="", missingFields = "";	
			
			if(isEmail($("#email").val()) != true && $("#email").val() != "")
			{
				errorMessage += "<p>your email address is not valid!</p>";
			}
			if($("#email").val() == "")
			{
				missingFields += "<p>your email address is missing!</p>";
			}
			
			if(isNaN($("#phone").val()))
			{
				errorMessage+= "<p>your phone number is not valid!</p>";
			}
			if($("#phone").val() == "")
			{
				missingFields += "<p>your phone number is missing!</p>";
			}
			if($("#password").val() != $("#confirmPassword").val())
			{
				errorMessage += "<p>your passwords don't match, enter again</p>";
			}
			if($("#password").val() == "")
			{
				missingFields += "<p>Password field is empty!</p>";
			}
			if($("#confirmPassword").val() == "")
			{
				missingFields += "<p>Confirm password field is empty!</p>";
			}
			errorMessage += missingFields; 	
			
			if(errorMessage != "")
			{
				$("p").html(function(){
					return (errorMessage);
				});
				$("p").css("color" ,"red");
			}
			else
			{
					$("p").html(function(){
					return "<p>you did it Congratulations!</p>";
					});
				$("p").css("color" ,"green");
			}
			
			});
			