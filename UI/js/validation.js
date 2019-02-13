function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === '' || password === '') {
        document.getElementById('alert').style.display = 'block';
        return false;
    }
     window.location.href = '../html/political-party.html';
}

function validateSignup() {
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    if (password !== confirmpassword || confirmpassword === '' || password === '') {
        document.getElementById('alert').style.display = 'block';
        return false;
    }
     window.location.href = '../html/index.html';
}