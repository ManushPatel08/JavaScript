const box = document.getElementById("box")
const color = document.getElementById("color")
const radius = document.getElementById("radius")
const images = document.getElementById("images")
const img = document.getElementById("box-img")

box.style.height = "400px"
box.style.width = "400px"
box.style.border = "2px solid black" 
box.style.margin = "150px 500px"

const changeColor = () =>{
    box.style.backgroundColor = color.value
}

const changeRadius = () =>{
    box.style.borderRadius = radius.value
}

const changeImage = () =>{
    // img.src = images.value
    // img.style.height = "100%"
    // img.style.width = "100%"
    // img.style.objectFit = "contain"
    box.style.backgroundImage = `url(${images.value})`
    box.style.backgroundSize = "cover"
    box.style.backgroundPosition = "center"
    box.style.backgroundRepeat = "no-repeat"
}