const newYears = "01 jan 2022";
function countDown () {
  /*convirtiendo newyears a fecha reconocible para el programa en milisegundos*/ 
  const newyearsDate = new Date(newYears)
  const currentDate = new Date()

  const totalSeconds = (newyearsDate - currentDate)/1000
  
  const seconds = Math.floor((totalSeconds))% 60 ;
  const minuts = Math.floor((totalSeconds )/60) % 60;

  const hours =Math.floor((totalSeconds)/3600) % 24;

  const days = Math.floor((totalSeconds / 3600)/24);

  console.log(days , hours ,minuts , seconds ,totalSeconds)
}
countDown();
setInterval(countDown,1000,aa)
const prueba = 9181079.238 % 60;
console.log(prueba)