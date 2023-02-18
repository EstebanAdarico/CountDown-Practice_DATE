

const secondsEl =document.getElementById('seconds'); 
const minsEl =document.getElementById('mins') ;
const hoursEl =document.getElementById('hours') ;
const daysEl =document.getElementById('days') ;

const newYears = "01 jan 2024";


function countDown () {
  /*convirtiendo newyears a fecha reconocible para el programa en milisegundos*/ 
  const newyearsDate = new Date(newYears)
  const currentDate = new Date()

  const totalSeconds = (newyearsDate - currentDate)/1000
  
  const seconds = Math.floor((totalSeconds))% 60 ;
  const mins = Math.floor((totalSeconds)/60) % 60;

  const hours =Math.floor((totalSeconds)/3600) % 24;

  const days = Math.floor((totalSeconds / 3600)/24);

  secondsEl.innerHTML =formatTime(seconds);
  minsEl.innerHTML = formatTime(mins);
  hoursEl.innerHTML = formatTime(hours);
  daysEl.innerHTML = formatTime(days);





  
}
function formatTime(time){
  return time < 10 ? `0${time}` : time ;
}

//initial call
countDown();
setInterval(countDown,1000)
// setInterval(countDown,1000,aa)
// const prueba = 9181079.238 % 60;
// console.log(prueba)
