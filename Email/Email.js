
const sendMail = () => {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")

    const params = {
        name: name.value,
        email: email.value,
        message: message.value
    }

    const serviceId = "service_bdhdk3f"

    const templateId = "template_kzq0wsh"

    emailjs.send(serviceId, templateId, params).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

