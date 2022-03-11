// console.log('Hello World!')

// Computer Play Game
const computerPlay = () => {
    // Computer Options
    const options = document.querySelectorAll('.options button');
    const compOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
        option.addEventListener('click', function() {
            const compNumber = Math.floor(Math.random() * 3);
            const compChoice = compOptions[compNumber];
                console.log(compChoice);
            compareHands(this.textContent, compChoice); 
        });
    }); 
};


const compareHands = (playerChoice, compChoice) => {
    // checking for a tide
    const winner = document.querySelector('.winner');
    if (playerChoice === compChoice){
        winner.textContent = 'It is a tide';
        return;
    }
    // Comparing for rock
    if(playerChoice === 'rock'){
        if (compChoice === 'scissors'){
            winner.textContent = 'Player wins';
            return;
        } else {
            winner.textContent = 'Player Lose';
            return;
        }
    } 
    // Comparing for paper
    if(playerChoice === 'paper'){
        if (compChoice === 'scissors'){
            winner.textContent = 'Player Lose';
            return;
        } else {
            winner.textContent = 'Player Wins';
            return;
        }
    } 
    // Comparing for scissors
    if(playerChoice === 'scissors'){
        if (compChoice === 'paper'){
            winner.textContent = 'Player Wins';
            return;
        } else {
            winner.textContent = 'Player Lose';
            return;
        }
    }
};
computerPlay();

