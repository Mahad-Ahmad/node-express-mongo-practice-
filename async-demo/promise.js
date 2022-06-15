let p = new Promise((resolve, reject) => {
  // Killing some async operations
  setTimeout(() => {
    // resolve(1);
    reject(new Error("message"));
  }, 2000);
});

p.then((result) => {
  console.log(result);
});
p.catch((error) => {
  console.log(error.message);
});
