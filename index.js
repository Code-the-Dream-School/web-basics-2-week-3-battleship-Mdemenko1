const battleship = () => {

  var player1 = 
    {
      name: prompt('Type name for Player 1'),
      shipCount: 4,
      gameBoard:[ [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]
                ]
    };
    var player2 = {
      name: prompt('Type name for Player 2'),
      shipCount: 4,
      gameBoard:[ [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]
                ]
    };
    //shipPlaced count variable
    let shipPlaced =0;

    //create a function to generate random numbers from 0 to 3
   function randomValues (min,max){
   return Math.floor(Math.random()*(max-min+1))+min;
   }; 
   /* Using while loop, since for loop will generate only 4 ships, does not metter 
    if the random numbers will be generate twice same coordinates and ship would be 
    placed in the same position twice; */
    while (shipPlaced < 4) {
      let x1 = randomValues(0,3);
      let y1 = randomValues(0,3);
      let x2 = randomValues(0,3);
      let y2 = randomValues(0,3);
      

      if (player1.gameBoard[x1][y1] === 0 || player2.gameBoard[x2][y2] === 0  ){
        player1.gameBoard[x1][y1] = 1;
        player2.gameBoard[x2][y2] = 1;
        shipPlaced +=1;
      };
      }
      // I would like that game would start from random player
      let otherPlayer;
      if (Math.random() > 0.5 ){
        currentPlayer = player1;
        otherPlayer = player2;
      } else {
        currentPlayer = player2;
        otherPlayer = player1;
      }
      console.log(`Current Player is ${currentPlayer.name}`);
      //Starting game
      while (currentPlayer.shipCount !== 0 && otherPlayer.shipCount !== 0){
        let xGuess = prompt('Please enter your x-coordinate guess');
        let yGuess = prompt('Please enter your y-coordinate guess');
      if (otherPlayer.gameBoard[xGuess][yGuess] === 1){
        alert('You hit the ship');
        otherPlayer.shipCount--;
        console.log(otherPlayer.name, otherPlayer.shipCount);
      }else {
        alert('You missed, better luck next time');
        //Switching players
        if (currentPlayer === player1){
          currentPlayer = player2;
          otherPlayer = player1;
        } 
      else {
        currentPlayer = player1;
        otherPlayer = player2;
        
      } 
      console.log(`Current Player is ${currentPlayer.name}`);
    }
  }
  return `The winner is ${currentPlayer}`
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
