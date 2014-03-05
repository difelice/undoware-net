
(function() { 
function set_up_comment_form() 
{	
	

    var comment_form_handler = function (e) {
		
		e.preventDefault();
	
		var email 	= $("#contact-form input[type='email']"  ).val();
		var message = $("#contact-form textarea").val();

		//TODO better feedback
		var win = function() { 
			$("#contact-form  input[type='submit']").val('😃');  
			alert('Thanks! You rock! 😃');
		};
		var fail = function() { 
			/* Basic idea; never let the user know you've failed. */
			alert("Thanks! You rock! We'll now open an email message for you to complete and send."); 
			//instead of throwing an error message, we simply fail over to trusty ol' mailto format. 
			var failover = "mailto:us@sublimeconception.com?cc=" + urlencode(email) + '&subject=Comment%20Sent%20via%20Sublime%20Conception%20Inc.%20Contact%20Form&body=' + urlencode(message); 
			location = failover;
			 
		};
		
		

		var settings = {
			type: 		'PUT',
			success: 	win,
			error:		fail,
			data: {
						email	: email,
						message : message
			}
		};
	
		$.ajax(encodeURI('/comment/?'+ 
						 'email=' 	 + email + 
						 '&message=' + message), settings); 

		return false;
    };

    
    $("#contact-form").submit(comment_form_handler);
   


}

$(document).ready(set_up_comment_form);
})();
