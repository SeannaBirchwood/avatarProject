var fs = require('fs');
var request = require('request');
var http = require("http");

var sourceArgs = process.argv.slice(2);

console.log(sourceArgs);

var options = {
  url: "https://api.github.com/repos/" + sourceArgs[0] + "/" + sourceArgs[1] + "/contributors",
  headers: {
    'User-Agent': 'Lighthouse-labs'
  }
};


function getRepoContributors(repoOwner, repoName, _callback) {
//find contributors, which comes into an array
  request.get(options, function(err, data) {

  var contribUrls = JSON.parse(data.body);
  for (var i = 0; i < contribUrls.length; i++) {
    downloadImageByURL(contribUrls[i]["avatar_url"], "avatar_images/" + contribUrls[i]["login"] + ".png");
      }

    });
};

function downloadImageByURL(url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath)).on('close', function() {
    return ""
  });
};

// getRepoContributors("lighthouse-labs", "laser_shark", (err, result) => {
//   console.log("Errors:", err);
//   console.log("Result:", result);
// });




//https://api.github.com/repos/lighthouse-labs/laser_shark/contributors


// in the morning, research quickly the frameworks behind "request library" and
// the reasons behind streaming. 

//egghead.io might be useful - video instruction