const submitHandler = (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("name",name)
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    document.getElementById("registerForm").style.display="none"

    success = document.getElementById("registerSuccess")
    success.innerHTML = "You Have Successfully Created An Account!"

};

const login = () =>{
    location.href = "login.html"
}

const validateUser = () =>{
    let loginemail = document.getElementById("loginemail").value;
    let loginpassword = document.getElementById("loginpassword").value;

    let email = localStorage.getItem("email")
    let passwd = localStorage.getItem("password")


    if(loginemail == email && loginpassword == passwd)
    {
        const otp = generateOTP()
        localStorage.setItem("otp", otp)
        sendMail(localStorage.getItem("name"),localStorage.getItem("email"),otp);
        document.getElementById("email").innerHTML = `We Have Sent You An OTP to ${email}`
        document.getElementById("otp").style.display = "block"
    }
    else
    {
        alert("Login Failed. Please check your credentials.");
    }
}

function generateOTP(){
    let otp = Math.floor(Math.random()*(999999 - 100000 + 1)) + 100000
    return otp;
}
const sendMail = (name,email,otp) => {

    const params = {
        name: name,
        email: email,
        otp: otp
    }

    const serviceId = "service_bdhdk3f"

    const templateId = "template_zg1y3bn"

    emailjs.send(serviceId, templateId, params).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}


const verifyOTP = () =>{
    let loginotp = document.getElementById("loginotp").value
    let storedotp = localStorage.getItem("otp")

    if(loginotp === storedotp)
    {
        document.getElementById("loginsuccess").innerHTML = "Login Successful!!!"
        document.getElementById("otp").style.display = "none"
        document.getElementById("login").style.display = "none"
    }
    else
    {
        alert("Invlaid OTP!!")
    }
}
