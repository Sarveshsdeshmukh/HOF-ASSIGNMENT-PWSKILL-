// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.




function RandomNumber(delay) {
    let remainingTime = delay;
  
    const count = setInterval(() => {
      console.log(`Time remaining: ${remainingTime} seconds.`);
      remainingTime--;
  
      if (remainingTime < 0) {
        clearInterval(count);
        const randomNumber = Math.floor(Math.random() * 10000); 
        console.log(`Random number generated: ${randomNumber}`);
      }
    }, 1000);
  }
  
  const delayInSeconds = 3;
RandomNumber(delayInSeconds);
  