var interval = setInterval(oneSecond, 1000);
function oneSecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
