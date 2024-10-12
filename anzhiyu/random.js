var posts=["2024/03/15/春天的味道/","2024/10/12/这是一篇新的博文/","2024/10/11/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };