'use strict';

//console.log('Bonjour world!');

//Done Ask the user their name through a prompt()
let userName = prompt('Hey there! What is your name? ');

//Done Display that name back to the user through a custom greeting welcoming them to your site.
alert(`Welcome to my site ${userName}! Lets play a game! It's a guessing game you may guess Yes or No or Y/N only`);

//TODO prompt user total of 5 questions

let questionOneGuess = prompt('Do I have a dog named after a food? ').toLowerCase();

if (questionOneGuess ==='y' || questionOneGuess ==='Yes'){
  //console.log('Well done! You are correct');
  alert('Well done! You are correct');
} else if(questionOneGuess === 'n' || questionOneGuess === 'No'){
  //console.log('Sorry you are incorrect. I do have a dog named after a food his name is Sauce');
  alert('Sorry you are incorrect. I do have a dog named after a food his name is Sauce');
}

let questionTwoGuess = prompt('Have I lived in Seattle most of my adult life?').toLowerCase();

if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
  //console.log('Huzzah you are correct I have spent most of my adult life in Seattle');
  alert('Huzzah you are correct I have spent most of my adult life in Seattle');
} else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  //console.log('Sadly you are incorrect I have spent most of my adult life in seattle');
  alert('Sadly you are incorrect I have spent most of my adult life in seattle');
}

let questionThreeGuess = prompt('Have I ever been a train engineer?').toLowerCase();

if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {
  //console.log('Although some of my closest friends do belive I have done this in the past, you dear user are incorrect');
  alert('Although some of my closest friends do belive I have done this in the past, you dear user are incorrect');
} else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {
  //console.log('You are correct I have sadly never spent any time as a train engineer');
  alert('You are correct I have sadly never spent any time as a train engineer');
}

let questionFourGuess = prompt('Did I invite Modest Mouse to my 16th Birthday with a hand written letter? ').toLowerCase();

if (questionFourGuess === 'y' || questionFourGuess === 'Yes') {
  //console.lop('Yes user I did invite them to my 16th birthday. Sadly they did not attend. Later in life i met the dummer out at a bar and told him how sad I was they did not attend');
  alert('Yes user I did invite them to my 16th birthday. Sadly they did not attend. Later in life i met the dummer out at a bar and told him how sad I was they did not attend');
} else if (questionFourGuess === 'n' || questionFourGuess === 'no') {
  //console.log('User you are incorrect. I did write them a letter. Fun fact I moved to seattle based on some of their lyrics to the song Doing the Cockroach');
  alert('User you are incorrect. I did write them a letter. Fun fact I moved to seattle based on some of their lyrics to the song Doing the Cockroach');
}

let questionFiveGuess = prompt('Have I ever run at least one half marathon').toLowerCase();

if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
  console.log('You are correct I have run at least one half marathon, I have run 7');
  alert('You are correct I have run at least one half marathon, I have run 7');
} else if (questionFiveGuess === 'n' || questionFiveGuess === 'no' ) {
  //console.log('I have run many half marathons in the past');
  alert('I have run many half marathons in the past');
}

alert(`Thanks ${userName} for coming by and hanging out!`);
