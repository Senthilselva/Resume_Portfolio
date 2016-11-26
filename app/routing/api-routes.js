// ===============================================================================
// ROUTING
// ===============================================================================
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtps://senthilbackup42%40gmail.com:kitehigh@smtp.gmail.com');

module.exports = function (app) {


	app.post('/mail', function (req, res) {

		console.log('Req   '+ JSON.stringify(req.body));
		var senderMail= '"" <'+ req.body.email + '>';
		var subjectVar = "Message from  "+ req.body.email;
		var textVar= req.body.message; 

			var mailOptions = {
		    from: senderMail, // sender address 
		    to: 'senthilselvak@gmail.com', // list of receivers 
		    subject: subjectVar, // Subject line 
		    text: textVar, // plaintext body 
		    html: '<b>'+ textVar +'</b>' // html body 
		    };

   		transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        throw error;
	    }
    		res.send('Message sent: ' + info.response);
		});

	});


	app.post('/api/friend', function (req, res) {
			var newFriend = req.body;
				var sum = [];
			for(var i=0; i< friends.length; i++){
				sum[i] = 0;
				for(var j=0; j < 10; j++){
					//if (!isNAN(newFriend.scores[j]) && !isNAN(friends[i].scores[j]))
					sum[i] += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
					//break;
				}
				// console.log (sum[i]);	
			}

			friends.push(req.body);
			var closestNum = sum.indexOf(Math.min.apply(null,sum));
			var match = friends[closestNum]
			res.json(match); // KEY LINE


	
	});
}