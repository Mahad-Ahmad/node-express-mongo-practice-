console.log("before");
getUser(1, getRepositories);
console.log("after");

function getRepositories(user) {
  // console.log("User:", user);
  getRepositories(user.gitHubUserName, getCommits);
}

function getCommits(repos) {
  //   console.log("Repositories:", repos);
  getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Getting user from Database");
    callback({ id, gitHubUserName: "Mahad" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Getting repositries from Database");
    callback(["repo:1", "repo:2", "repo:3"]);
  }, 2000);
}

function getCommits(repos, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API");
    callback(["commit"]);
  }, 2000);
}
