console.log("brfore");
// getUser(1, (user) => {
//   console.log("User:", user);
//   getRepositories(user.gitHubUserName, (repos) => {
//     console.log("Repositories:", repos);
//     getCommits(repos[0], (commit) => {
//       console.log(commit);
//     });
//   });
// });

// getUser(1)
//   .then((user) => getRepositories(user.gitHubUserName))
//   .then((repos) => getCommits(repos[2]))
//   .then((commits) => console.log(commits));

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUserName);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log(err.message);
  }
}
displayCommits();

console.log("after");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user from Database");
      resolve({ id, gitHubUserName: "Mahad" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting repositries from Database");
      resolve(["repo:1", "repo:2", "repo:3"]);
    }, 2000);
  });
}

function getCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API");
      resolve(["commit"]);
    }, 2000);
  });
}
