var request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {

}

getRepoContributors("lighthouse-labs", "laser_shark", (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});
