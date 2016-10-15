var fs = require('fs');
var request = require('request');
var http = require("http");

var sourceArgs = process.argv.slice(2);

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
  //got this from stack -- research why it works
  request(url).pipe(fs.createWriteStream(filePath)).on('close', function() {
    return ""
  });
};

//error / debug tool
getRepoContributors(sourceArgs[0], sourceArgs[1], (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});

console.log("Brett is awesome");