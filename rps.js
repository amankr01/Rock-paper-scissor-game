let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let reset = document.getElementById('reset');

let myChoice;
let compChoice;
let finalResult;
let result;
let score = localStorage.getItem('result');

let myChoiceElem = document.getElementById('my-choise');
let botChoiceElem = document.getElementById('bot-chose');
let resultElem = document.getElementById('result');
let scoreElem = document.getElementById('score');

reset.onclick = function() {
   localStorage.clear();
   update();
   myChoiceElem.innerText = 'Please choose any weapon from above';
   botChoiceElem.innerText = '';
   resultElem.innerText = '';
   scoreElem.innerHTML = '😎 win: 0 <br> 😭 loss: 0 <br> 😶 Tie: 0';
};

function update(savedScore) {
   result = savedScore ? JSON.parse(savedScore) : { win: 0, loss: 0, tie: 0 };
}
update(score);

let compChoose = function() {
   let comp = Math.round(Math.random() * 8);
   if (comp === 0 || comp === 8 || comp === 5) {
      compChoice = 'rock';
   } else if (comp === 1 || comp === 7 || comp === 4) {
      compChoice = 'paper';
   } else {
      compChoice = 'scissor';
   }
};

let conclusion = function() {
   if (
      (myChoice === 'rock' && compChoice === 'paper') ||
      (myChoice === 'paper' && compChoice === 'scissor') ||
      (myChoice === 'scissor' && compChoice === 'rock')
   ) {
      finalResult = 'you lose';
      result.loss++;
   } else if (
      (myChoice === 'paper' && compChoice === 'rock') ||
      (myChoice === 'rock' && compChoice === 'scissor') ||
      (myChoice === 'scissor' && compChoice === 'paper')
   ) {
      finalResult = 'you win';
      result.win++;
   } else {
      finalResult = 'match tie';
      result.tie++;
   }
};

rock.onclick = function() {
   myChoice = 'rock';
   compChoose();
   conclusion();
   localStorage.setItem("result", JSON.stringify(result));
   show();
};

paper.onclick = function() {
   myChoice = 'paper';
   compChoose();
   conclusion();
   localStorage.setItem("result", JSON.stringify(result));
   show();
};

scissor.onclick = function() {
   myChoice = 'scissor';
   compChoose();
   conclusion();
   localStorage.setItem("result", JSON.stringify(result));
   show();
};

function show() {
   myChoiceElem.innerHTML = `You chose <span class="highlight">${myChoice}</span>`;
   botChoiceElem.innerHTML = `Bot chose <span class="highlight2">${compChoice}</span>`;
   resultElem.innerText = `Result: ${finalResult}`;
   resultElem.classList.add('result1');
   scoreElem.innerHTML = `😎 win: ${result.win} <br> 😭 loss: ${result.loss} <br> 😶 Tie: ${result.tie}`;
}