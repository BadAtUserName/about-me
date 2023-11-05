'use strict';



//Done Ask the user their name through a prompt()
let userName = prompt('Hey there! What is your name? ');

//Done Display that name back to the user through a custom greeting welcoming them to your site.
alert(`Welcome to my site ${userName}! Lets play a game! It's a guessing game you may guess Yes or No or Y/N only`);


let correctCount = 0; //count correct answers

//TODO prompt user total of 5 questions
function questionOneGuess () {
  let questionOneGuess = prompt('Do I have a dog named after a food? ').toLowerCase();

  if (questionOneGuess ==='y' || questionOneGuess ==='Yes'){

    alert('Well done! You are correct');
    correctCount += 1;
  } else if(questionOneGuess === 'n' || questionOneGuess === 'No'){

    alert('Sorry you are incorrect. I do have a dog named after a food his name is Sauce');
  }
}

questionOneGuess();

function questionTwoGuess () {
  let questionTwoGuess = prompt('Have I lived in Seattle most of my adult life?').toLowerCase();

  if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {

    alert('Huzzah you are correct I have spent most of my adult life in Seattle');
    correctCount += 1;
  } else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){

    alert('Sadly you are incorrect I have spent most of my adult life in seattle');
  }
}

questionTwoGuess();

function questionThreeGuess () {
  let questionThreeGuess = prompt('Have I ever been a train engineer?').toLowerCase();

  if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {

    alert('Although some of my closest friends do belive I have done this in the past, you dear user are incorrect');
    correctCount += 1;
  } else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {

    alert('You are correct I have sadly never spent any time as a train engineer');
  }
}

questionThreeGuess();

function questionFourGuess () {
  let questionFourGuess = prompt('Did I invite Modest Mouse to my 16th Birthday with a hand written letter? ').toLowerCase();

  if (questionFourGuess === 'y' || questionFourGuess === 'Yes') {

    alert('Yes user I did invite them to my 16th birthday. Sadly they did not attend. Later in life i met the dummer out at a bar and told him how sad I was they did not attend');
    correctCount += 1;
  } else if (questionFourGuess === 'n' || questionFourGuess === 'no') {

    alert('User you are incorrect. I did write them a letter. Fun fact I moved to seattle based on some of their lyrics to the song Doing the Cockroach');
  }
}

questionFourGuess();

function questionFiveGuess () {
  let questionFiveGuess = prompt('Have I ever run at least one half marathon').toLowerCase();

  if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
    console.log('You are correct I have run at least one half marathon, I have run 7');
    alert('You are correct I have run at least one half marathon, I have run 7');
    correctCount += 1;
  } else if (questionFiveGuess === 'n' || questionFiveGuess === 'no' ) {

    alert('I have run many half marathons in the past');
  }
}

questionFiveGuess();

function questionSixGuess (){
  let correctNum = 37;//let userGuess = prompt('Please guess a number between 1 and 100');

  //would like to make all for loops while loops in future
  for (let userGuess = 4; userGuess > 0; userGuess -= 1) {
    let userGuess = prompt('Please guess a number between 1 and 100');


    if (userGuess > correctNum) {
      alert('You guessed to high');
    }
    else if (userGuess < correctNum) {
      alert('You guessed too low');

    } else if (+userGuess === correctNum) {
      alert('Huzzah you guessed correct');
      correctCount += 1;
      break;
    }

    if (userGuess === 1) {
      alert(`'Sorry you are out of attempts the correct answer was ${correctNum}'`);
    }
  }
}

questionSixGuess();


function questionSevenGuess () {
  let seattleAnswers = ['rain', 'grey', 'cold'];//an array of correct answers

  for (let userSeattleGuess = 6; userSeattleGuess > 0; userSeattleGuess -= 1) {
    let userSeattleGuess = prompt('What are my favorite things about Seattle...All start with the word "The"').toLowerCase();

    for (let i = 0; i < seattleAnswers.length; i += 1) {
      if (userSeattleGuess === seattleAnswers[i]) {
        alert('It is true I do that love about seattle.');
        correctCount += 1;
        userSeattleGuess = 0;//need to break out of outer loop
        break;
      }
    }
    alert(`'Here are the things I love about Seattle! I love ${seattleAnswers}'`);
    break;
  }
}

questionSevenGuess();

alert(`'Thanks ${userName} for coming by and hanging out you got ${correctCount} out of 7 correct!'`);
