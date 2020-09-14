window.onload=function()
{
    var seconds=00;
    var tens=00;
    var minutes=00;
    var hours=00;
    var appendHours=document.getElementById('hours');
    var appendMinutes=document.getElementById('minutes');
    var appendSecs=document.getElementById('seconds');
    var appendTens=document.getElementById('tens');
    var start=document.getElementById('start');
    var stop=document.getElementById('stop');
    var reset=document.getElementById('reset');
    var interval;

    start.onclick=function()
    {
        //puts and end to the function set by setInterval.
        clearInterval(interval);
        //executes the function after the given time.
        interval=setInterval(startTimer,10);
    }
    stop.onclick=function()
    {
        
        clearInterval(interval);
    }
    reset.onclick=function()
    {
        
        clearInterval(interval);
        tens="00";
        seconds="00";
        minutes="00";
        hours="00";
        appendTens.innerHTML=tens;
        appendSecs.innerHTML=seconds;
        appendMinutes.innerHTML=minutes;
        appendHours.innerHTML=hours;
    }
function startTimer()
{
    tens++;
    if (tens<9)
    {
        appendTens.innerHTML="0" + tens;
    }
    if (tens>9)
    {
        appendTens.innerHTML=tens;
    }
    if(tens>99)
    {
        seconds++;
        appendSecs.innerHTML="0"+seconds;
        tens=0;
        appendTens.innerHTML="0"+0;
    }
    if (seconds>9)
    {
        appendSecs.innerHTML=seconds;
    }
    if (seconds>60)
    {
        minutes++;
        appendMinutes.innerHTML="0"+minutes;
        seconds=0;
        appendSecs.innerHTML="0"+0;
    }
    if (minutes>9)
    {
        appendMinutes.innerHTML=minutes;
    }
    if(minutes>60)
    {
        hours++;
        appendHours=appendHours.innerHTML="0"+hours;
        minutes=0;
        appendMinutes="0"+0;
    }
    if(hours>9)
    {
        appendHours.innerHTML=hours;
    }
}
}