const btnSubmit = document.querySelector(".btn");
const inforHidden = document.querySelector(".inforhidden");
const inputEmail = document.querySelector(".inputemail");
const erroEmail = document.getElementById("emailHelp");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// click button submit email
btnSubmit.addEventListener("click", function () {
  // Check định dạng email
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const checkEmail = emailValue.match(regex);
  console.log(checkEmail);
  if (checkEmail) {
    // Ẩn hiện thông tin
    inforHidden.classList.remove("d-none");
    inputEmail.classList.add("d-none");
  } else {
    // Email nhập không đúng
    erroEmail.textContent = "Email không hợp lệ. Xin nhập lại";
    erroEmail.classList.add("text-danger");
  }
});

//View more -- View less
const skillContainer = document.querySelectorAll(".skill-ctn");
const viewMore = document.querySelectorAll(".viewmore");
const cardBody = document.querySelectorAll(".card-body");

for (let i = 0; i < skillContainer.length; i++) {
  skillContainer[i].addEventListener("mouseover", function () {
    viewMore[i].classList.remove("d-none");
  });
  skillContainer[i].addEventListener("mouseout", function () {
    viewMore[i].classList.add("d-none");
  });
  viewMore[i].addEventListener("click", function () {
    if (viewMore[i].textContent === "🔼 VIEW LESS") {
      cardBody[i].classList.add("d-none");
      viewMore[i].textContent = "🔽 VIEW MORE";
    } else {
      cardBody[i].classList.remove("d-none");
      viewMore[i].textContent = "🔼 VIEW LESS";
    }
  });
}
