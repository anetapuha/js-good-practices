document.prototype.frm = document.querySelector('.form');
const adminUser = "admin123"
const adminPassword = "milan12345"
const isAdminUser = adminUser + adminPassword

function Cancel() {
    document.frm.username.value = "";
    document.frm.password.value = "";
    document.getElementById("username").focus();
}

function IsAdminLogin(name, password) {
    let user = name + password

    if(user == isAdminUser) {
        return true;
    } else {
        return false;
    }
}

function Login() {
    alert("You're logged in!");
}

function _submit() {
    let f = document.frm;
    let username = f.username.value;
    let password = f.password.value;
    let userNameField = document.getElementById("username");

    if(username == "" || password == "") {
        alert("Username and Password cannot be empty");
        userNameField.focus();
        Cancel();
    } else if(IsAdminLogin(username, password)) {
        Login();
        alert("Welcome admin!");
    } else {
        Login()
    } 
}

const submitButton = document.getElementsByTagName('button');

if(typeof document.frm === 'object' && submitButton.length > 0) {
        submitButton = submitButton[0]; 
        //Submit button click
        submitButton.addEventListener('click', function() {
            _submit();
        });
    }