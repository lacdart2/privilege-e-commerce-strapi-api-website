// toggle login-resister ui

var x = document.querySelector(".login-part");
var y = document.querySelector(".register-part");
var z = document.querySelector(".btn-switch");
const login = document.querySelector(".login-toggle");
const register = document.querySelector(".register-toggle");


login.addEventListener("click", loginSlide);
function loginSlide() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

register.addEventListener("click", registerSlide);
function registerSlide() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

// side-bar cart icon 
const cartBtn = document.getElementById("cart-btn");
const cartSidebar = document.getElementById("cart-sidebar");
const closeBtn = document.getElementById("close-btn");

cartBtn.addEventListener("click", () => {

  cartSidebar.classList.add("show");

});

closeBtn.addEventListener("click", () => {
  console.log("clicked");
  cartSidebar.classList.remove("show");
});


// Loader :


window.addEventListener("load", loadPage)

const loader = document.querySelector(".loader");
function loadPage() {
  loader.classList.add("loader--hidden");
  loader.addEventListener("afterTransition", () => {
    document.body.removeChild(loader);
  })

}


// FAQ
let faq = document.querySelectorAll('.box-faq .box');
faq.forEach(box => {
  box.onclick = () => {
    faq.forEach(unbox => {
      unbox.classList.remove('active');
    })
    box.classList.add('active');
  }
})



// show more details in product details page

const detailBtn = document.querySelector(".show-description");

const description = document.querySelector(".detail-description");

detailBtn.addEventListener('click', (e) => {

  description.classList.toggle("full");




  if (detailBtn.innerText === "MORE DETAILS") {
    detailBtn.innerText = "LESS DETAILS";
  } else {

    detailBtn.innerHTML = "MORE DETAILS";
  }


});

