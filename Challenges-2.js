/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls a total of 12 in one roll. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable) - DONE
2. If a player rolls two fours IN THE SAME ROLL then his round score gets added to the other players total score, and that player looses his score.
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1 or the total of the roll is 7. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScores, activePlayer, gamePlaying;
var nonActivePlayer;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
            
        // 1. Random Number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //console.log('total roll is ' + (dice1 + dice2));
        console.log('Dice 1 = ' + dice1 + ', Dice 2 = ' + dice2);
        
        // 2. Display the result.
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        
        // 3. Update the round score IF the rolled number was NOT 1.
        if(dice1 === 6 && dice2 === 6) {
           scores[activePlayer] = 0; 
            updateActiveScores();
            alert('double bloody sixes - you loose your score');
           nextPlayer(); 
        } else if (dice1 === 4 && dice2 === 4) {
          // score goes to non active player
            alert('double bloody fours - your score goes to the other player, waa waa');
            addScoreToNextPlayer();    
                            
        } else if (dice !==1 || dice2 !==1) {
            // add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            dice1 = 0;
            dice2 = 0;
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
    updateActiveScores();
    
    // Check if player won the game
    if (scores[activePlayer] >= 200) {
        // player wins the game
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
        removeDice(); 
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
        
    } else {
    nextPlayer();    
    } 
    
}); 


function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        removeDice(); 
}

document.querySelector('.btn-new').addEventListener('click', init);
                                                   

function init () {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    alert('Welcome to the Pig Game \n Rules \n 1. Roll a total of 12 in one roll = LOOSE your total score. \n 2. Roll two fours = LOOSE your total score & its gets added to the other player. \n 3. Roll a 1 and you LOOSE your turn & round score. \n \n \n WINNER is the 1st person to get to 200 or enter an alternative score into the FINAL SCORE box');
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    removeDice(); 

    document.getElementById('name-0').textContent = 'Player 1';    
    document.getElementById('name-1').textContent = 'Player 2'; 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
}

function removeDice () {
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

function updateActiveScores() {
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
}


function addScoreToNextPlayer() {
        if (activePlayer === 0) {
                    nonActivePlayer = scores[0];
                    scores[activePlayer] = 0;
                    updateActiveScores();
                    nextPlayer();   
                    scores[activePlayer] += nonActivePlayer;
                    nonActivePlayer = 0;
                    updateActiveScores();
                    
    } else {
                    nonActivePlayer = scores[1];
                    scores[activePlayer] = 0;
                    updateActiveScores();
                    nextPlayer();   
                    scores[activePlayer] += nonActivePlayer;
                    nonActivePlayer = 0;
                    updateActiveScores();
       
    }
}











