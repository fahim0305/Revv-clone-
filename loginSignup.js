function signUp(e) {
    e.preventDefault();
    let myForm = document.getElementById("signUpForm");
    let fName = myForm.fName.value;
    let lName = myForm.lName.value;
    let email = myForm.email.value;
    let password = myForm.password.value;
  
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  
    let user = {
      fName,
      lName,
      email,
      password,
    };
    let arr = JSON.parse(localStorage.getItem("users"));
    arr.push(user);
    localStorage.setItem("users", JSON.stringify(arr));
  }
  
  function signIn(e) {
    e.preventDefault();
  
    let myForm = document.getElementById("signInForm");
  
    let email = myForm.email.value;
    let password = myForm.password.value;
  
    let allUsers = JSON.parse(localStorage.getItem("users"));
    
  
    allUsers.forEach(function (user) {
      if (email == user.email && password == user.password) {
        window.location.href = "main_page.html"; 
      } else {
        alert("Error");
      }
    });
  }
  