(async () => {
  const variable = 11;

  //   const p1 = new Promise((resolve, reject) => {
  //     if (variable === 11) {
  //       resolve("OK");
  //     } else {
  //       reject("BAD");
  //     }
  //   });

  //   p1.then((res) => {
  //     console.log("then", res);
  //   }).catch((error) => {
  //     console.log("catch", error);
  //   });

  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     });

  //123
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);
})();
