var request = require("request");



function getDataUrl (url, callback) {
	var url = 'http://www.example.com'

	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        console.log("This worked", body); 
	    }
	    function fetchData (url, callback) {
	    	console.log("Does this work?", fetchData);
	    }

	  console.log("Response Status Code:", response.statusCode);

});
}

getDataUrl()
