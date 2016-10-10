var request = require('request');

// request('http://www.modulus.io', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log("This worked", body); 
//     }
// }); **This worked very well to grab all of the html from the specified site**



var http = require("http");

var requestOptions = {
  host: "example.com",
  path: "/"
};

http.get(requestOptions, (response) => {    // HTTP Response Callback

  response.setEncoding("utf8");             // Use UTF-8 encoding

  response.on("data", function(data) {           // On Data Received
    console.log("Chunk Received. Length:", data.length);
    console.log("End result", data)
  });

  response.on("end", function() {                // On Data Completed
    console.log("Response stream complete.");
  });

});
