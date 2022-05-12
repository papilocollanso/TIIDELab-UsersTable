
//api 
const URL = "https://jsonplaceholder.typicode.com/users";

function fetchUsers(){
  // make use of the browser fetch api
fetch(URL)
  .then((response) => response.json())
  .then((json) => renderUsers(json));
}

//render the users in the dom
function renderUsers(usersData){
const ul =document.getElementById('user-list-container');

  usersData.forEach((user,index )=> {
  
  const li= document.createElement('li');
   li.innerHTML += `
    <span>${index + 1}</span>
    <span>${user.name}</span>
    <span>-</span>
    <span class="username">${user.username}</span> `;
   
 ul.appendChild(li);

    
  });


}

//Add a search function to DOM

function searchUsersByUsername(){
  const input =document.getElementById('search');
  const inputValue = input.value.toUpperCase();
 const ul = document.getElementById("user-list-container");

  const userList =ul.querySelectorAll('li');//arrays of all the li tags []

  //loop through all the users and resnder the one that match the search
  for(let index =0; index<userList.length; index++){
    const usernameSpanTag =userList[index].querySelector('.username');
    const usernameSpanTagValue =usernameSpanTag.innerText.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
    if(isMatch){
      userList[index].style.display="block";



    }
    else{
      userList[index].style.display="none";
    }
  }
}

//calling the fetch function
fetchUsers();
