// // //localStorage.setItem('name','Raghavendra');
// // document.getElementById('single-item').addEventListener("click",function(){
  
// //   window.localStorage.setItem('name','Raghavendra');
// //   updateUI();
  
// // });

// document.getElementById('another-item').addEventListener("click",function(){  
// localStorage.setItem('users',
//   JSON.stringify([{name:"Raghu KV", food:"Pizza",age:"22"},{name:"Viji", food:"Burger",age:"42"}])
// );
// var itemList = document.getElementById('ls-currently');

// let lc = JSON.parse(localStorage.getItem("users"));
// lc.forEach(function(item)
// {
//   var name = item.name+" ";
//   var food = item.food+" ";
//   var age = item.age+" ";
//   var li = document.createElement('li');
//   li.className = 'list';
//   li.appendChild(document.createTextNode(name+""))
//   li.appendChild(document.createTextNode(food+""))
//   li.appendChild(document.createTextNode(age))
//   itemList.appendChild(li)
// })
  
// //updateUI();
// });

// document.getElementById('get-single-item').addEventListener("click",function(){  
// const user = JSON.parse(localStorage.getItem('users'));
// document.getElementById('ls-currently').textContent = user.food
// ;
// });

// // document.getElementById('remove-single-item').addEventListener("click",function(){  
// // localStorage.removeItem('name');
// // updateUI();
// // });

// // document.getElementById('remove-all').addEventListener("click",function(){  
// // localStorage.clear();
// // updateUI();
// // });



// // function updateUI(){
// //   var values = [], keys = Object.keys(localStorage), i = keys.length;
// //   while(i--) {values.push(localStorage.getItem(keys[i]));}
// //   document.getElementById('ls-currently').textContent=values;
// //   console.log(values);
// // }

// var arr = [1,2,3,4], arr1 = [4,3,2,1];
// var a=arr.sort();
// arr1.sort();
// console.log(equal(arr,arr1))

// function equal(a,b){
//   if(a.length!=b.length)
//   {
//     return 0;
//   }
//   for(let i=0;i<a.length;i++){
//     if(a[i]!==b[i]){
//       return 0;
//     }
//   }
//   return 1;
// }

// Mock function to simulate creating a post (returns a promise)
function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(post);
    }, 1000); // Simulate the post creation taking 1 second
  });
}

// Mock function to simulate updating the user's last activity time (returns a promise)
function updateLastUserActivityTime(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      user.lastActivityTime = new Date().toLocaleTimeString();
      resolve(user.lastActivityTime);
    }, 1000); // Simulate updating the last activity time taking 1 second
  });
}

// Mock function to simulate deleting the last post (returns a promise)
function deleteLastPost(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000); // Simulate the deletion taking 1 second
  });
}

// Function to execute the scenario without async/await
function postUserLastActive() {
  // Simulate user data with initial activity time
  const user = { name: "John Doe", lastActivityTime: new Date().toLocaleTimeString() };
  console.log("User:", user);

  // Simulate creating posts
  createPost("First post")
    .then((post1) => {
      return createPost("Second post")
        .then((post2) => {
          return createPost("Third post")
            .then((post3) => {
              const posts = [post1, post2, post3];
              console.log("Posts created:", posts);
              return posts;
            });
        });
    })
    .then((posts) => {
      // Simulate updating the user's last activity time
      return updateLastUserActivityTime(user)
        .then((lastActivityTime) => {
          console.log("User's last activity time:", lastActivityTime);
          return posts;
        });
    })
    .then((posts) => {
      // Simulate deleting the last post
      return deleteLastPost(posts)
        .then(() => {
          console.log("Posts after deletion:", posts);
        });
    })
    .catch((error) => {
      console.error("Error:", error);
    }); 
}

// Call the main function to execute the scenario without async/await
postUserLastActive();
