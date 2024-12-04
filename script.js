// صفحة تسجيل الدخول
function login() {
    const code = document.getElementById("loginCode").value;
    if (code === "TIK-SoFe-Q01") { // كود الدخول
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("mainContainer").style.display = "block";
    } else {
        alert("Invalid access code!");
    }
}

// مولد أسماء المستخدمين (4 أو 5 أحرف فقط)
function generateUsername() {
    const chars = "1234567890abcdefghijklmnopqrstuvwxyz";
    const length = Math.random() < 0.5 ? 4 : 5; // اختيار عشوائي بين 4 أو 5 أحرف
    let username = "";
    for (let i = 0; i < length; i++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return username;
}

// التحقق من اسم المستخدم على تيك توك
async function checkUsername(username) {
    const output = document.getElementById("output");
    const url = `https://www.tiktok.com/@${username}`;
