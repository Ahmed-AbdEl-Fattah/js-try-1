let userInfo = document.querySelector("#user_info");
let userData = document.querySelector("#user");
let links = document.querySelector("#links");

if (localStorage.getItem("username")) {
  links.remove();
  userData.computedStyleMap.display = "flex";
  userData.innerHTML = "username is:" + "  " + localStorage.getItem("username");
}

let logOutBtn = document.querySelector("#logout");

logOutBtn.addEventListener("click", function () {
  // localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1000);
});

