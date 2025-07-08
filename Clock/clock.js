function getTime(){
    const date = new Date();

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hours.innerHTML = hour < 10 ? '0' + hour : hour;
    minutes.innerHTML = min < 10 ? '0' + min : min;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;

}

setInterval(() => {
    getTime();
}, 1000) 