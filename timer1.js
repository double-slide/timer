// takes user input "node timer1.js X Y ...." where X, Y, etc are positive integers for setting timer countdown
// ignores negative numbers, zero, and non-number characters

const args = process.argv;

for (let i = 2; i < args.length; i++) {
  
  let timerReq = Number(args[i]);

  if ((timerReq > 0) && (Number.isInteger(timerReq))) {
    console.log("timerReq:", timerReq);
    
    //beep did not work on my system, so output '.' instead
    setTimeout(() => {
      process.stdout.write(`.`);
    }, 1000 * timerReq);
  }
}

