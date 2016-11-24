// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require('../data/friends.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/api/friendlist', function (req, res) {
		res.json(friends);
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