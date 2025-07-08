const incSize = () =>{
    let img = document.getElementById("img")
    img.style.transform = "scale(1.5)"
    img.style.marginLeft = "250px"
    img.style.marginTop = "250px"
}
const orgSize = () =>{
    let img = document.getElementById("img")
    img.style.transform = "scale(1)"
    img.style.marginLeft = "0px"
    img.style.marginTop = "0px" 
}

function generateOTP(){
    let otp = document.getElementById("otp")
    otp.innerHTML = Math.floor(Math.random()*(999999 - 100000 + 1)) + 100000
    otp.style.border = "2px solid black"
    otp.style.width = "100px"
}