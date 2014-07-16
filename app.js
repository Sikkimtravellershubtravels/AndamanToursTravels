/**
* Created with AndamanTourTravels.
* User: subhenduc
* Date: 2014-07-16
* Time: 10:10 AM
* To change this template use Tools | Templates.
*/

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var router = express.Router();

router.get('/about', function(req, res) {
   res.send('this is the about page'); 
});

app.use('/app', router);

app.listen(process.env.PORT || 3000, function() {
   console.log('server started'); 
});
