let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let sissor = document.getElementById('scissor');
let reset = document.getElementById('reset');

let mychoise;
let comptChoise;

let finalResult;

/**/
let result;
let score = localStorage.getItem('result')

reset.onclick = function(){
   localStorage.clear();
   update()
    mychoise1.innerText = ` please choose any weapon from above `;
    botchose.innerText = ``;
    result1.innerText = ``;
    score1.innerText = ` 😎 win: 0  ||😵 loss: 0 || 😶 Tai: 0}`;
}

function update(score){
   result = score ? JSON.parse(score) : {
   win: 0,
   loss: 0,
   tai: 0,
} 
}
update(score);
/**/


let comptcoosed = function() {
   let comp = Math.round(Math.random()*8);/*2*/
   if (comp == 0 || comp ==8 || comp == 5) {
      comptChoise = 'rock'
   } else if (comp == 1 || comp == 7 || comp == 4) {
      comptChoise = 'paper'
   } else {
      comptChoise = 'sissor'/*236*/
   }
}

/**/
let conclusion = function(){
   if (mychoise == 'rock' && comptChoise == 'paper' || 
       mychoise == 'paper' && comptChoise == 'sissor' || 
       mychoise == 'sissor' && comptChoise == 'rock' ) {
         finalResult = 'you loss'
         result.loss++ ;
   } else if (mychoise == 'paper' && comptChoise == 'rock' || mychoise == 'rock' && comptChoise == 'sissor' ||
      mychoise == 'sissor' && comptChoise == 'paper') {
          finalResult = 'you win'
          result.win++
   } else {
          finalResult = 'match tai'
          result.tai++
   }
}


/**/
rock.onclick = function(){
       mychoise = 'rock';
       comptcoosed();
       conclusion();
       localStorage.setItem("result" , JSON.stringify(result))
       show()
   };
   
paper.onclick = function() {
       mychoise = 'paper'
       comptcoosed();
       conclusion();
       localStorage.setItem("result" , JSON.stringify(result));
       show()
   }; 
   
sissor.onclick = function() {
       mychoise = 'sissor';
       comptcoosed();
       conclusion();
       localStorage.setItem("result" , JSON.stringify(result));
       show()
   };


/*addind css*/
/*final result on web page*/

let mychoise1 = document.getElementById('my-choise');
let botchose = document.getElementById('bot-chose');
let result1 = document.getElementById('result');
let score1 = document.getElementById('score');

function show(){
   mychoise1.innerHTML = `You choosed <span class="highlight">${mychoise}</span>`;
   botchose.innerHTML = `Bot choosed <span class="highlight2">${comptChoise} </span> `;
   result1.innerText = `result :- ${finalResult}`;
   score1.innerText =` 😎 win: ${result.win}  ||😵 loss: ${result.loss} || 😶 Tai: ${result.tai}`
}




