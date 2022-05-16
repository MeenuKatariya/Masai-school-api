

document.getElementById('registerBtn').addEventListener('click', () => {
  var userData = {
    name:document.querySelector("#enterName").value,
    email:document.querySelector("#enterEmail").value,
    password:document.querySelector("#enterPassword").value,
    userName:document.querySelector("#enterUserName").value,
    mobile:document.querySelector("#enterMobile").value,
    description:document.querySelector("#enterDescription").value
  }
  // console.log(userData);
  signup(userData);
})

async function signup(userData)
{
  // console.log(registerName)
  try {
    let result=await fetch ('http://masai-api-mocker.herokuapp.com/auth/register',{
    method : "POST",
    body : JSON.stringify(userData),
    headers : { "Content-Type" : "application/json" }
  });
  let data=await result.json()
  console.log(data);
  } catch (error) {
    console.log(error)
  }


}

async function login(userData)
{
  try {
    var obj = {
      username : document.getElementById('Name').value,
      password : document.getElementById('Password').value
    }
    let result=await fetch ('http://masai-api-mocker.herokuapp.com/auth/login',{
    method : "POST",
    body : JSON.stringify(obj),
    headers : { "Content-Type" : "application/json" }
  });
  let data=await result.json()
  // console.log(data);
  profile (obj.username,data.token);
  } catch (error) {
    console.log(error)
  }


}

async function profile (username,token){
  try {
    let result = await fetch(`http://masai-api-mocker.herokuapp.com/user/${username}`,{
      method : 'GET',
      headers : {Authorization: `Bearer ${token}`}
    });
    let data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

