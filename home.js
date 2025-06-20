
// Get the menu button and close button elements
const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const navigationUl = document.querySelector('nav .navigation ul');

// Add event listeners to the buttons
menuBtn.addEventListener('click', () => {
  navigationUl.classList.add('active');
});

menuClose.addEventListener('click', () => {
  navigationUl.classList.remove('active');
});

let popup=document.getElementById("popup");
function openPopup(event){
  event.preventDefault();
  const name =document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const password=document.getElementById("password").value.trim();
  const number=document.getElementById("number").value.trim();
  const coursename=document.getElementById("user-course").value;


  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const phoneError = document.getElementById("number-error");
  const courseError = document.getElementById("course-error");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  phoneError.textContent = "";
  courseError.textContent = "";

  let valid=true;

  if(name === ""){
    nameError.textContent = "Name is Required.";
    valid=false;
  }
   if(email === ""){
    emailError.textContent = "Email is Required.";
    valid=false;
  }
   if(password === ""){
    passwordError.textContent = "Password is Required.";
    valid=false;
  }
   if(number === ""){
    phoneError.textContent = "Number is Required.";
    valid=false;
  }
  else if(number.length !== 11 || !/^\d+$/.test(number) ){
        phoneError.textContent = "Please enter 11 digits number.";
        valid=false;

  }

  
   if(coursename === ""){
    courseError.textContent = "Coursename is Required.";
    valid=false;
  }
  if(valid){
    popup.classList.add("open-popup");
  }

}

function closePopup(){
  popup.classList.remove("open-popup");
}


function subscribe() {
  const emailInput = document.getElementById("newsletter-email");
  const message = document.getElementById("newsletter-msg");
  const email = emailInput.value.trim();

  if (!email) {
    message.textContent = "Please enter your email.";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Invalid email address.";
    message.style.color = "red";
    return;
  }

  // Success
  message.textContent = "You subscribed successfully!";
  message.style.color = "green";
  emailInput.value = "";

  setTimeout(() => {
    message.textContent = "";
  }, 3000);
}




