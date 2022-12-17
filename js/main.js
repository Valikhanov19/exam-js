const burgerBtn = document.querySelector(".burger");
const elNav = document.querySelector(".navbar-nav");

burgerBtn.addEventListener("click" , () => {
  burgerBtn.classList.toggle("shownav")
  elNav.classList.toggle("shownav")
})


function fan() {
  const  inputEl = document.getElementById(`inputEl`);
  const input ={
    email:inputEl.value,
  }
  if(input.email == null || input.email == ""){
    alert(`Please enter your e-mail address`)
  }else{
    alert(`Your accout successfully`)
  }
}