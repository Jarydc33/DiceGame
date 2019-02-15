
startGame();

function startGame(){

	//let currentLevel = [4, 6, 8, 10, 12, 20];

	console.log("Let`s begin! We will roll to see who will go first." );
	initialRoll();

	let userInput;
	let firstRoll;

	if(initialRoll(true)){

		console.log("The computer won the roll and will begin every round.")
		let firstRoll = 1;
	}

	else{

		console.log("You won the roll and will begin every round.")

	}


	do{
		userInput = prompt("Type begin to start the game!")
	}while(userInput.toUpperCase() != "BEGIN");

	beginRound1(firstRoll);
}

function beginRound1(whoStart){

	console.log("In this round, your goal will be to get a straight. You will need to get 1, 2, 3, and 4 in any order. You will be playing with 4 four-sided dice.")

	do{
			userInput = prompt("Type roll when you are ready!")
	}while(userInput.toUpperCase() != "ROLL");

	let diceSides = 4;
	let numberDice = 4;
	let correctAnswer = [1, 2, 3, 4];
	let computerAnswer = [];
	let yourAnswer = [];

	if(whoStart == 1){

		do{
			for(let i = 0; i < numberDice; i++ ){
				
				rollDice(diceSides);
				computerAnswer[i] = rollDice(diceSides);

			}
			compareDice(correctAnswer,computerAnswer);

		}while(compareDice == false);


	}
	else{





	}

}


function compareDice(correct, potential){

	potential.sort(function(a,b){return a-b});

}

function initialRoll(){


		let initialUserThrow = rollDice(6);
		let initialPCThrow = rollDice(6);

		if(initialPCThrow > initialUserThrow){
			return true;
		}
		else{
			return false;
		}

}

function rollDice(numberOfSides){

		let yourRoll = Math.ceil(Math.random() * numberOfSides);
		return yourRoll;
		 
}