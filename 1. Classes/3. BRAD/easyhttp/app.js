const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Create data
const data = {
  title: "Custom post",
  body: "This is a custom post"
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
  console.log(post);
});