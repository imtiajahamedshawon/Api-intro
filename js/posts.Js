function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayUsers(data))
};
 loadPosts()

 function displayUsers(posts){
     const postsContainer = document.getElementById('posts')
     for(const post of posts){
         const div = document.createElement('div')
         div. classList.add('post')
         div.innerHTML = `
           <h2> ${post.title} </h2>
           <hp> ${post.body}</hp>
         `;
         postsContainer.appendChild(div)

         console.log(post);

     }
 }
