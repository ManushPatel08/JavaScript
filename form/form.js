
const submitHandler = (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("name",name)
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    location.href = "localstorage.html"
};

const getData = () =>{
    let a = localStorage.getData("name")
    let b = localStorage.getData("email")
    let c = localStorage.getData("password")
}

const validateUser = () => {
    let loginemail = document.getElementById("loginemail").value;
    let loginpassword = document.getElementById("loginpassword").value;

    let email = localStorage.getItem("email")
    let pass = localStorage.getItem("password")

    if(loginemail === email && loginpassword === pass) {
        console.log(email+' '+pass)
        alert("Login Successful");
    }
    else
    {
        console.log(email+' '+pass)
        alert("Login Failed. Please check your credentials.");
    }
}
const clearData = () =>{
    localStorage.clear()
}