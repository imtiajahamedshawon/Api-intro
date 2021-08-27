function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
};


 function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => displayUsers(data))
 };


 function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data => console.log(data))
 }

function displayUsers(data){
    const ul = document.getElementById('users')
    for(const users of data){
        console.log(users);
        const li = document.createElement('li');
        li.innerText = `name: ${users.name}, ${users.email}`;
        ul.appendChild(li)
        // console.log(users.name);
    }
   
};




              //    pactis

// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data =>displayUsers(data))
// }

// function displayUsers(data){
//     const ul = document.getElementById('users')
//     for(const users of data){
//         console.log(users);
//         const li = document.createElement('li')
//         li.innerText = `name : ${users.name} , ${users.email}`
//         ul.appendChild(li)
        
//     }
// }
