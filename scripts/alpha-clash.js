// function play(){
//     // step 1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to pressed
    const currentAlphabet = document.getElementById('current-alphabet');
    const presentAlphabet = currentAlphabet.innerText;
    const expectedAlphabet = presentAlphabet.toLowerCase();
    console.log(expectedAlphabet);

    // checked matched or not
    if(playerPressed === expectedAlphabet){
        // console.log('you got a point');
        console.log('you have pressed correctly', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // -------------x-------------
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        // -------------x----------------
        // // 1. get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // 2. reduce the life count 
        // const newLife = currentLife - 1;
        // // display the updated life count
        // currentLifeElement.innerText = newLife;

    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame() {
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Random alphabet:', alphabet);

    // set random alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}


