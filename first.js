
let userDetailsDatabase = {};
function getUserDetails ()
{
//  alert("working")


 let userName =  prompt("Enter your username")
  function validateUsername(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  

  while (validateUsername(userName) == false) {
    userName = prompt("Username must not be less than 0 and greater than 10");
  }

   userDetailsDatabase["UserName"] = userName
  let email = prompt("Enter your email address");

  function validateEmail(email) {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }
  while (validateEmail(email) == false) {
    email = prompt("email format incorrect");
  }
  userDetailsDatabase["Email"] = email

  let phoneNumber = prompt("Enter your phone number");

  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Password must not be less than 6 digits");
  }
  userDetailsDatabase["phoneNumber"] = phoneNumber

  let password = prompt("Enter your password");

  function validatePassword(password) {
    if (password.length < 6 && password== null) {
      return false;
    } else {
      return true;
    }
  }

  while (validatePassword(password) == false) {
    password = prompt("Invalid password,Password must not be less than 6 digits");
  }

  let confirmPassword = prompt("Confirm  your password");

  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword == null) {
      return 
    } 
  }
  

  while (validateConfirmPassword(confirmPassword) != password) {
    confirmPassword = prompt("confirmPassword does not match password, try again!");
  }
  alert("Details submitted successfully")
  
}



function displayDetails() {
  //alert("WORKING")


  
  
  alert(
  `Your Details\n\nUsername: ${userDetailsDatabase.UserName}   
  PhoneNumber: ${userDetailsDatabase.phoneNumber}\n 
  Email: ${userDetailsDatabase.Email}`
  )

}



