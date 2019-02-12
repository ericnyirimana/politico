function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === '' || password === '') {
        document.getElementById('alert').style.display = 'block';
        return false;
    }
}

function validateSignup() {
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    if (password !== confirmpassword) {
        document.getElementById('alert').style.display = 'block';
        return false;
    }
}