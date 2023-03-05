setInterval(() => {
    T = new Date();
    Thour = T.getHours();
    Tminute = T.getMinutes();
    Tsecond = T.getSeconds();

    hrotation = 30*Thour + Tminute/2;
    mrotation = 6*Tminute;
    srotation = 6*Tsecond;


    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);