$(document).ready(function() {

	console.log("document ready");

//Open Model 
$(".contactLink").on('click',function(){
	console.log("here")
        $('#contactModal').modal();      
});


//Send mail
$("#sendMail").on("click", function(){
	console.log($('#EmailId').val().trim());
	var isValid = true;
	var vEmail = $('#EmailId').val().trim();
	var vText = $('#txtText').val().trim();

debugger;

	if(!vText || !vEmail){
		isValid=false;
	}

	if (typeof(vEmail) == 'undefined' || vEmail==null) {
		isValid=false;  
  	}

	var atpos = vEmail.indexOf("@");
    var dotpos = vEmail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>= vEmail.length) {
     isValid = false;
    } 

	var eMessage = {
		email:vEmail,
		message:vText
	}

	if(!isValid){
		$('#errMsg').html("Please type in a message and a Email-Id");
		$('#contactModal').modal(); 
		//return false;
	} else {

		var currentURL = window.location.origin;
	    
	    $.post(currentURL + '/mail', eMessage, function(data,err){
	    	if (err != 'success'){
	    		$('#errMsg').html(err);	
	    		$('#contactModal').modal();
	    		//return false;
	    	} else {
				alert("Thank you! Email Sent")
				$('#contactModal').modal('hide'); 
	    	}
	    });

		
	}



})//sendMail

});//on document ready
