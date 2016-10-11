var request = require('request');

function getRepoContributors(repoOwner, endpoint, cb) {
  //
	var repoOwner = ""
	var repoName = ""
	var endpoint = repoOwner + "/" repoName;
	var options = {
    url: `${githubRoot}${endpoint}`,
    headers: {
      'User-Agent': 'request'

  var uriString = "https://api.github.com/v3/repos/".split("") + endpoint + "contributors".split("");
    }
  };

  // Just pass the callback down to request
  request.get(options, callback);
}

} //We will need code here to filter the avatar data

response.on(data, function() {
	console.log("Received", data.length)
})

getRepoContributors("lighthouse-labs", "laser_shark", (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});

getRepoContributors()

//next we need code to produce img files on the local disk from the information
// retrieved above



"https://api.github.com/repos/lighthouse-labs/laser_shark/collaborators{/collaborator}"

"https://api.github.com/repos/octocat/Hello-World"

in the morning, research quickly the frameworks behind "request library" and
the reasons behind streaming. 