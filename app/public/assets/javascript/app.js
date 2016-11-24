$(document).ready(function() {

	console.log("document ready");

//Open Model 
$(".contactLink").on('click',function(){
	console.log("here")
        $('#contactModal').modal();      
})

});//on document ready
