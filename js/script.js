function setDate(){
    const secHand = document.querySelector('.second-hand');
    const date = new Date();
    const sec = date.getSeconds();
    const secDegree = ((sec/60)*360)+90;
    console.log(sec+" "+secDegree);
    secHand.style.transform = `rotate(${secDegree}deg)`;
    
    const minHand = document.querySelector('.min-hand');
    const min = date.getMinutes();
    const minDegree = ((min/60)*360)+90;
    console.log(sec+" "+minDegree);
    minHand.style.transform = `rotate(${minDegree}deg)`;
    
    const hourHand = document.querySelector('.hour-hand');
    const hour = date.getHours();
    const hourDegree = ((hour/12)*360)+90;
    console.log(sec+" "+hourDegree);
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate,1000);