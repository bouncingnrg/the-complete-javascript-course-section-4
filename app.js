/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random Number
        var dice = Math.floor(Math.random() *6) +1;

        // 2. Display the result.
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT 1.

        if (dice !== 1) {
            // add score
            roundScore += dice;
            // sane as writing roundScore = current roundScore + dice roll
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer(); // see next player function
         }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
   
       // add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    
    // Update the UI(user interface)
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 
    
    // Check if player won the game
    if (scores[activePlayer] >= 20) {
        // player wins the game
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
    nextPlayer();    
    } 
    
}); 


function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        /*
        // above is the same as writing the below (Turnery Opporator)
        if(activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        */
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        // toggle, adds the class if its not there, if the class is not there it will add it.
        
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);
                                                   

function init () {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</eb>';

/* 
// This is how you can use querySelector to store info from a webpage as a varibale.

var x = document.querySelector('#score-0').textContent;
console.log(x);

*/

document.querySelector('.dice').style.display = 'none'; // changing the dice NOT to display when the webpage opens. Using the style.display you can change the display properties. Style = css method , Display = css property , '' = css value.

/*
Function btn() {
    // do something here
}
/*
document.querySelector('.btn-roll').addEventListener('click', btn); // addEventListeneer, 1st argument is the name of the event i.e click, the 2nd is the name of the function. Do not use the parentesis like normal when calling a function. As this is beoing called in the listeneer its called a 'CALL BACK' - a call back is a function we pass into another function as an ARGUMENT.

/*
// an anomonymous function
is inside another function but can only be used in that function, ie it can not be call somewhere else & doesn't have a name, it would look like this
*/

    document.getElementById('name-0').textContent = 'Player 1';    
    document.getElementById('name-1').textContent = 'Player 2'; 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

















