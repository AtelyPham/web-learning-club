var days = document.getElementsByClassName("box_days")[0];
var hours = document.getElementsByClassName("box_hours")[0];
var minutes = document.getElementsByClassName("box_minutes")[0];
var seconds = document.getElementsByClassName("box_seconds")[0];
var countDown = new Date("dec 2, 2021 00:00:00").getTime();
var setTime = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;
    var day = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);
    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
    console.log(seconds     )
},1000)

console.log(seconds)
