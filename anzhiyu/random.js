var posts=["2024/04/10/hello-world/","2024/04/10/article/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };