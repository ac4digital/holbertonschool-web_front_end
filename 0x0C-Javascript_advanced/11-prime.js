function countPrimeNumbers() {
  let counter = 0;
  
  for (let i = 2; i <= 100; i++) {
    
    let dividers = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        dividers++;
      }
    }
    if (dividers <= 2) {
      counter++;
    }
  }
  return counter;
}

function countTo100() {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
}

//console.log("Cantidad de numeros primos del 2 al 100 " + countPrimeNumbers());
let start = window.performance.now();
countTo100();
let finish = window.performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${finish - start} miliseconds`);