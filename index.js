// Code your solutions in this file
function countDown(number) {
    if (typeof number !== 'number' || number <= 0 || !Number.isInteger(number)) {
      console.log("Submit a valid positive integer.");
      return;
    }
    while (number >= 0) {
        console.log(number);
        number--;
    }
  }

 function writeCards(names) {
    const thankYouMessages = [];

    for (let n = 0; n < names.length; n++) {
      thankYouMessages.push(`Thank you, ${names[n]}, for your kindness!`);
    }
    return(thankYouMessages);
  }

