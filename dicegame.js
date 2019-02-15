
startGame();

function startGame(){

	//let currentLevel = [4, 6, 8, 10, 12, 20];

	console.log("Let`s begin! We will roll to see who will go first." );
	//initialRoll();
	let userInput;
	let firstRoll;

	if(initialRoll(true)){

		console.log("The computer won the roll and will begin every round.")
		firstRoll = 1;
	}

	else{

		console.log("You won the roll and will begin every round.")
		firstRoll = 2;
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
	let correctAnswer = [1,2,3,4];
	let computerAnswer = [];
	let yourAnswer = [];
	let isCorrectComputer;
	let isCorrectUser;

	do{
		if(whoStart % 2 != 0){

			for(let i = 0; i < numberDice; i++ ){
				
				computerAnswer[i] = rollDice(diceSides);

			}
			isCorrectComputer = compareDice(correctAnswer,computerAnswer, whoStart);

		}
		else{
			for(let i = 0; i < numberDice; i++ ){
				
				yourAnswer[i] = rollDice(diceSides);

			}
			isCorrectUser = compareDice(correctAnswer,yourAnswer, whoStart);

		}
		whoStart++;
	} while(isCorrectUser != true && isCorrectComputer != true);

}


function compareDice(correct, potential, whoStart){

	let check = 0;
	let isCorrect;

	potential.sort(function(a,b){return a-b});

	if(whoStart % 2 != 0){
	
		for(let i = 0; i < correct.length; i++){

			if(potential[i] == correct[i]){

				check++;

			}
			else{return false;}
		}

		
		if(check == 4){
			console.log("The computer got it right!")
			console.log(potential);
			return true;
		}
	}
	else{

		for(let i = 0; i < correct.length; i++){

			if(potential[i] == correct[i]){

				check++;

			}
			else{return false;}
		}

		
		if(check == 4){
			console.log("You got it right!")
			console.log(potential);
			return true;
		}






	}

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