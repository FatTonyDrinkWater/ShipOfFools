const listElement = document.querySelector(".posts");
const singlePost = document.getElementById("single-post");
const form = document.querySelector("#new-post");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();

  // xhr.open(method, url);

  // xhr.responseType = "json"; // автоматическе парсит в JSON

  // xhr.onload = function () {
  //   if (xhr.status >= 200 && xhr.status < 300) {
  //     resolve(xhr.response);
  //   } else {
  //     reject(new Error("Something went wrogn!"));
  //   }
  //   //   const listOfPosts = JSON.parse(xhr.response);
  // };

  // xhr.onerror = function () {
  //   reject(new Error("Failed to send request!"));
  // };
  // xhr.send(JSON.stringify(data));

  //   fetch(url);
  // });

  return fetch(url); // returns
}

function fetchPosts() {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
    (responseData) => {
      const listOfPosts = responseData;
      for (const post of listOfPosts) {
        const postEl = document.importNode(singlePost.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        postEl.querySelector("li").id = post.id;
        listElement.append(postEl);
      }
    }
  );
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}
fetchBtn.addEventListener("click", fetchPosts());
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    const postId = event.target.closest("li").id;
    console.log(postId);
    sendHttpRequest(
      "DELETE",
      `"https://jsonplaceholder.typicode.com/posts/${postId}"`
    );
  }
});
