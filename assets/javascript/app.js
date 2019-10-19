let questions = [
  {
    question:"1. Who was Naruto's teacher at the ninja academy?",
    answers: [
      { answer:"A: Rock Lee", value: false },
      { answer:"B: Neji Hyuuga", value: false },
      { answer:"C: Iraku", value: true },
      { answer:"D: Mizuki", value: false}
    ]},
    {
    question:"2. What village does Naruto belong to?",
    answers: [
      { answer:"A: Sanagakure", value: false },
      { answer:"B: Konohagakure", value: true },
      { answer:"C: Amegakure", value: false },
      { answer:"D: Yukigakure", value: false }  
    ]},
    {
    question:"3. Who is the second hokage of Konoha?",
    answers: [
      { answer:"A: Tobirama Senju", value: true },
      { answer:"B: Neji Hyuuga", value: false },
      { answer:"C: Hinata Hyuuga", value: false },
      { answer:"D: Mizuki", value: false }  
    ]},
    {
    question:"4. Who was the first ninja to be attacked by Naruto's Rasengan-Shuriken?",
    answers: [
      { answer:"A: Pain", value: false },
      { answer:"B: Kakuzu", value: true },
      { answer:"C: Sasuke", value: false },
      { answer:"D: Orochimaru", value: false }  
    ]},
    {
    question:"5. Which Akatsuki member killed Azuma?",
    answers: [
        { answer:"A: Deidara", value: false },
        { answer:"B: Hidan", value: true },
        { answer:"C: Itachi", value: false },
        { answer:"D: Tobi", value: false }  
    ]},
    {
    question:"6. Who among these people became jonin first?",
    answers: [
      { answer:"A: Ino", value: false },
      { answer:"B: Soifon", value: false },
      { answer:"C: Choji", value: false },
      { answer:"D: Neji", value: true }  
    ]},
    {
    question:"7. What is the name of the Biju inside Gaara?",
    answers: [
      { answer:"A: Nekomata", value: false },
      { answer:"B: Kyuubi", value: false },
      { answer:"C: Genbi", value: false },
      { answer:"D: Shukaku", value: true }  
    ]},
    
      
        
];


let game;
let counter = 0;
let clock;
let timer = 30;
let correctCounter = 0;
let incorrectCounter = 0;
let unansweredCounter = 0;

$(document).ready(function() {
  
  $('.answers').css('visibility', 'hidden');
  $('body').on('click', '.start-btn', function(event) {
    event.preventDefault();
    startGame();
    $('.answers').css('visibility', 'visible');
  });

  $('body').on('click', '.answer', function(event) {
    // console.log($(this));
    chosenAnswer = $(this).text();
    let answerCounter = questions[counter].answers;

    let answer = $('.answer');
    for (let i = 0; i < answerCounter.length; i++) {
      if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === true) {
        clearInterval(clock);
        let right = $(this).attr('class', 'right-answer answer');
        rightAnswer();
      } else if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === false) {
        clearInterval(clock);
        $(this).attr('class', 'wrong-answer answer');
        $('.first-answer').css('background-color', 'green');
        $('.first-answer').css('color', 'white');
        wrongAnswer();
      }
    }
  });

  $('body').on('click', '.reset-button', function(event) {
    event.preventDefault();
    resetGame();
  });
});

function rightAnswer() {
  correctCounter++;
  $('.time').html(timer);
  setTimeout(questionCounter, 1000);
}

function wrongAnswer() {
  incorrectCounter++;
  $('.time').html(timer);
  setTimeout(questionCounter, 1000);
}

function unanswered() {
  unanswered++;
  $('.main').append("<p class='times-up'>Time's up!</p>");
  $('.right-answer').css('background-color', 'green');
  $('.times-up')
    .delay(2000)
    .fadeOut(400);
    setTimeout(questionCounter, 1000);
    

}

// Start the game
function startGame() {
  $('.start-page').css('display', 'none');
  $('.questions-page').css('visibility', 'visible');
  $('.timer').html('<p>Time remaining: <span class="time">30</span></p>');

  $('.question').html(questions[counter].question);
    let showingAnswers =
    '<p class="answer first-answer">' +
    questions[counter].answers[0].answer +
    '</p><p class="answer">' +
    questions[counter].answers[1].answer +
    '</p><p class="answer">' +
    questions[counter].answers[2].answer +
    '</p><p class="answer">' +
    questions[counter].answers[3].answer +
    '</p>';

  $('.answers').html(showingAnswers);

  timerHolder();
}

function questionCounter() {
  if (counter < 6) {
    counter++;
    startGame();
    timer = 30;
    timerHolder();
  } else {
    finishGame();
  }
}

function timerHolder() {
  clearInterval(clock);
  clock = setInterval(seconds, 1000);
  function seconds() {
    if (timer === 0) {
      clearInterval(clock)
      unanswered();
    } else if (timer > 0) {
      timer--;
    } else{}
    
    $('.time').html(timer);
  }
}

function finishGame() {
  let final = $('.main')
    .html("<p>All done, here's how you did!<p><br>")
    .append('<p>Correct Answers: ' + correctCounter + '</p><br>')
    .append('<p>Unanswered: ' + unansweredCounter + '</p><br>')
    .append('<p>Wrong Answers: ' + incorrectCounter + '</p>');
  $(final).attr('<div>');
  $(final).attr('class', 'final');
  $('.final').append('<p><a class="btn btn-primary btn-lg reset-button" href="#">Restart the game!</a></p>');
  
  
  
}

function resetGame() {
  counter = 0;
  correctCounter = 0;
  incorrectCounter = 0;
  unansweredCounter = 0;
  timer = 30;
  startGame();
  timerHolder();
}