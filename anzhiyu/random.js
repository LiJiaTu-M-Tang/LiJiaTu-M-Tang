var posts=["2024/04/22/hello-my-friend/","2024/04/27/python魔法棒和魔法书之间的关系/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };