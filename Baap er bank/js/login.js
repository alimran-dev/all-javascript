document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    if (email === "sontan@baap.com" && password === "secret") {
        document.getElementById("user-email").value = "";
        document.getElementById("user-password").value = "";
        window.location.href = 'bank.html';
    }
    else {
        alert("Tui password vule gesos!! Toke teijjo sontan ghosona korlam.");
        document.getElementById("user-email").value = "";
        document.getElementById("user-password").value = "";
    }
})
document.getElementById("user-password").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    if (email === "sontan@baap.com" && password === "secret") {
        document.getElementById("user-email").value = "";
        document.getElementById("user-password").value = "";
        window.location.href = 'bank.html';
    }
    else {
        alert("Tui password vule gesos!! Toke teijjo sontan ghosona korlam.");
        document.getElementById("user-email").value = "";
        document.getElementById("user-password").value = "";
    }
    }
    
})