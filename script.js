const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
let passwordVisible = false;

togglePassword.addEventListener("click", () => {
    passwordVisible = !passwordVisible;
    password.type = passwordVisible ? "text" : "password";
    togglePassword.src = passwordVisible ? "closedeye.png" : "openeye.png";
});