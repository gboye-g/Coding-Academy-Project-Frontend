$(document).ready(function () {
  
// Form validation starts
let errorMessage = document.getElementById("errorMessage");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let dob = document.getElementById("dob");
let iswId = document.getElementById("iswId");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

let name_pattern = /^[A-Za-z-]+$/;
let email_pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
let phone_pattern = /^[0-9]+$/;

let validate = () => {
  if (document.forms.fname.value === "" || !document.forms.fname.value.match(name_pattern)) {
    errorMessage1.className = "active"; 
    errorMessage1.focus();

    return false;
  } 
  else{
    errorMessage1.className = "input-error"; 
    errorMessage1.focus();
  }
  if (document.forms.lname.value === "" || !document.forms.lname.value.match(name_pattern)) {
    errorMessage2.className = "active"; 
    errorMessage2.focus();

    return false;
  } 
  else{
    errorMessage2.className = "input-error"; 
    errorMessage2.focus();
  }
  if (
    document.forms.email.value === "" ||
    !document.forms.email.value.match(email_pattern)
  ) {
    errorMessage3.className = "active"; 
    errorMessage3.focus();

    return false;
  }
  else{
    errorMessage3.className = "input-error"; 
    errorMessage3.focus();
  }
  if (document.forms.phone.value === "" || !document.forms.phone.value.match(phone_pattern)) {
    errorMessage4.className = "active"; 
    errorMessage4.focus();

    return false;
  }
  else{
    errorMessage4.className = "input-error"; 
    errorMessage4.focus();
  }
  if (document.forms.dob.value === "") {
    return false;
  }
  if (document.forms.iswId.value === "") {
    return false;
  }
  if (document.forms.password.value === "") {
    return false;
  }
  if (document.forms.confirmPassword.value === "") {
    return false;
  }

  return true;
};

//Replaced with Jquery click
// let form = document.getElementById("signupCus");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let isValid = validate();

//   if (isValid) console.log(event.target);
// });

// Form validation ends

      //js code to show/hide password and change icon starts
const container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password");

      pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type === "password"){
                    pwField.type = "text";
               
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye")
                    })
               
                } else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash")
                    })

                }
            })
        })
      })
      //js code to show/hide password and change icon ends

           //jQuery Connecting to backend starts
         
            let obj = {}

            $('#submitCus').click(function (e) { 
              // e.preventDefault();

              let ans = validate();

              console.log(ans)
              if(ans){

                obj.firstName = $('#fname').val();
                obj.lastName = $('#lname').val();
                obj.email = $('#email').val();
                obj.mobile = $('#phone').val();
                obj.doB = $('#dob').val();
                obj.iswId = $('#iswId').val();
                obj.password = $('#password').val();

                console.log(obj)


                $.ajax({
                  type: "POST",
                  contentType: "application/json",
                  url: "http://localhost:8080/user/register-customer",
                  data:JSON.stringify(obj),
                  success: function (response) {
                    
                    console.log('sent ' + obj )
                      window.location = "Login.html"
                  },
                  error:(error)=>{
                      alert(error)
                  }
              });

              }
            });                
            });
                   //jQuery Connecting to backend ends
      