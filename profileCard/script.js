function updateUTCTime(){
    let now = new Date();
    let utcTime = now.toUTCString();
    document.getElementById("utc-time").textContent = utcTime;
}

setInterval(updateUTCTime, 1000);
updateUTCTime();