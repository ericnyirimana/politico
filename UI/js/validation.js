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

function validateParty() {
    const partyname = document.getElementById('partyname').value;
    const address = document.getElementById('address').value;
    const logourl = document.getElementById('logourl').value;
    if (partyname === '' || address === '' || logourl === '') {
        document.getElementById('alert').style.display = 'block';
        return false;
    }
     window.location.href = '../html/political-party.html';
}

function validateOffice() {
    const office = document.getElementById('office').value;
    const office_type = document.getElementById('office_type').value;
    if (office === '' || office_type === '') {
        document.getElementById('alert').style.display = 'block';
        return false;
    }
     window.location.href = '../html/political-offices.html';
}