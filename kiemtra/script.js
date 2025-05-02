// chuyển đổi form đăng nhaaoj, đăng nhập
document.getElementById("show-register").addEventListener("click", () => {
    document.getElementById("login-form").style.display = "none"
    document.getElementById("register-form").style.display = "block"
} )
document.getElementById("show-login").addEventListener("click", () => {
    document.getElementById("login-form").style.display = "block"
    document.getElementById("register-form").style.display = "none"
} )
// Xử lí chức năng đăng kí
document.getElementById("register").addEventListener("submit", (e) => {
    e.preventDefault();
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    var cfPassword = document.getElementById("confirm-password").value;

    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự.");
        return;
    }

    if (password !== cfPassword) {
        alert("Mật khẩu không khớp.");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Đăng ký thành công!");
    
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
});
// Xứ lí đăng nhập
document.getElementById("login").addEventListener("submit",(e) => {
    e.preventDefault()
    var email = document.getElementById("login-email").value
    var password = document.getElementById("login-password").value
    var storageEmail = localStorage.getItem('email')
    var storagePw = localStorage.getItem('password')

    if (email == storageEmail && password == storagePw){
        alert("Đăng nhập thành công")
        window.location.href = "main after login.html"
    }
    else{
        alert("Đăng nhập sai")
    }
})