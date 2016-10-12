var fs = require('fs');
var request = require('request')
var http = require("http");

var sourceArgs = process.argv.slice(2);

console.log(sourceArgs);

var options = {
    url: "https://api.github.com/repos/" + sourceArgs[0] + "/" + sourceArgs[1] + "/contributors",
    headers: {
      'User-Agent': 'Lighthouse-labs'
    }
};

//var contribs = sourceArgs

function getRepoContributors(repoOwner, repoName, _callback) {
                                 //find contributors, which comes into an array
  request.get(options, function(err, data) {

    var contribUrls = JSON.parse(data.body);
                                 //var avatarUrl = contribUrls[1]["avatar_url"];
                                 //console.log(avatarUrl);
    for (var i = 0; i < contribUrls.length; i++) {
      downloadImageByURL(contribUrls[i]["avatar_url"], "avatar_images/" + contribUrls[i]["login"] + ".png");
        //console.log(contribUrls[i]["avatar_url"]);
    }

    });
};

//function urlRequest ()

function downloadImageByURL(url, filePath) {
    request(url).pipe(fs.createWriteStream(filePath)).on('close', function() {
      return ""
    });
};

// download(getRepoContributors, function(){
//   console.log('done');
// });
// }



  // Just pass the callback down to request
//   request.get(options, callback);
// }

// } //We will need code here to filter the avatar data

// response.on(data, function() {
// 	console.log("Received", data.length)
// })

getRepoContributors("lighthouse-labs", "laser_shark", (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});

//getRepoContributors()

//next we need code to produce img files on the local disk from the information
// retrieved above




//https://api.github.com/repos/lighthouse-labs/laser_shark/contributors


// in the morning, research quickly the frameworks behind "request library" and
// the reasons behind streaming. 

//egghead.io might be useful - video instruction