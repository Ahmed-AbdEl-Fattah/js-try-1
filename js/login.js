let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");
let eyeBtn = document.querySelector("#eye");
let eyeBtnClose = document.querySelector("#eye-close");

let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

function login(p) {
    p.preventDefault()
    if (email.value === "" || password.value === "") {
        alert("please fill data");
    } else {
        if (getEmail && getEmail.trim() === email.value.trim() && getPassword && getPassword.trim() === password.value.trim()) {
            setTimeout(() => {
              window.location = "index.html";
            }, 500);
        } else {
            alert("The email or password is incorrect!!");
        }
    }
}

function eyefun() {
    if (password.type === "password") {
        password.setAttribute("type", "text");
        eyeBtn.style.display = "none";
        eyeBtnClose.style.display = "block";
    } else if (password.type === "text") {
        password.setAttribute("type", "password");
        eyeBtn.style.display = "block";
        eyeBtnClose.style.display = "none";
    }

}

eyeBtn.addEventListener("click",eyefun)
eyeBtnClose.addEventListener("click", eyefun);
loginBtn.addEventListener("click",login)

