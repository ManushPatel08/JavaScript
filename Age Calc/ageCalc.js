function calcAge()
{
    let birthdate = document.getElementById("birthdate").value;
    let date = new Date();

    let year = birthdate.split("-")[0]
    let month = birthdate.split("-")[1];
    let day = birthdate.split("-")[2];

    year = date.getFullYear() - year;
    month = (date.getMonth() + 1) - month;
    day = date.getDate() - day;

    document.getElementById("result").innerText = "You are " + year + " years, " + month + " months, and " + day + " days old.";

}