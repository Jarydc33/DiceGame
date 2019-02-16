
let userScore = 0;
let computerScore = 0;
let tempScore = 0;
let numRound = 0;
let currentRound = 1;

startGame();

function startGame(){

	//let currentLevel = [4, 6, 8, 10, 12, 20];

	console.log("Let`s begin! We will roll to see who will go first." );
	//initialRoll();
	let userInput;
	let firstRoll;

	if(initialRoll(true)){

		console.log("The computer won the roll and will begin the first round.")
		firstRoll = 1;
	}

	else{

		console.log("You won the roll and will begin the first round.")
		firstRoll = 2;
	}


	do{
		userInput = prompt("Type begin to start the game!")
	}while(userInput.toUpperCase() != "BEGIN");

	beginRound1(firstRoll);
}
//user will always be 2 (even) and computer will always be 1 (odd). 
function beginRound1(whoStart){

	

	let diceSides = 4;
	let numberDice = 4;
	let correctAnswer = [1,2,3,4];
	let computerAnswer = [];
	let yourAnswer = [];
	let isCorrectComputer;
	let isCorrectUser;
	let userInput;

	tempScore *= 2;
	if(numRound == 0){
		console.log("In this round, your goal will be to get a straight. You will need to get 1, 2, 3, and 4 in any order. You will be playing with 4 four-sided dice.");
		tempScore = 100; numRound++;
	}

		do{
			userInput = prompt("Type roll when you are ready!");
	}while(userInput.toUpperCase() != "ROLL");

	do{
		if(whoStart % 2 != 0){

			for(let i = 0; i < numberDice; i++ ){
				
				computerAnswer[i] = rollDice(diceSides);

			}
			isCorrectComputer = compareDice(correctAnswer,computerAnswer, whoStart, numberDice);

		}
		else{
			for(let i = 0; i < numberDice; i++ ){
				
				yourAnswer[i] = rollDice(diceSides);

			}
			isCorrectUser = compareDice(correctAnswer,yourAnswer, whoStart, numberDice);

		}
		whoStart++;
	} while(isCorrectUser != true && isCorrectComputer != true);

	do{
		userInput = prompt("Round one is over. Type begin to start round two!");
	}while(userInput.toUpperCase() != "BEGIN");

	whoStart -= 1;

	beginRound2(whoStart);
}

function beginRound2(whoStart){

	let diceSides = 6;
	let numberDice = 5;
	let correctAnswer = [2,2,3,3,3];
	let computerAnswer = [];
	let yourAnswer = [];
	let isCorrectComputer;
	let isCorrectUser;
	let userInput;

	tempScore *= 2;
	if(numRound == 1){
		console.log("Round 2");
		console.log("In round two, your goal will be to get a full house - threes over twos. You will need to get three threes and two twos in any order. You will be playing with 5 six-sided dice.");
		tempScore = 200; numRound++;
	}

		do{
			userInput = prompt("Type roll when you are ready!")
	}while(userInput.toUpperCase() != "ROLL");

	do{
		if(whoStart % 2 != 0){

			for(let i = 0; i < numberDice; i++ ){
				
				computerAnswer[i] = rollDice(diceSides);

			}
			isCorrectComputer = compareDice(correctAnswer,computerAnswer, whoStart, numberDice);

		}
		else{
			for(let i = 0; i < numberDice; i++ ){
				
				yourAnswer[i] = rollDice(diceSides);

			}
			isCorrectUser = compareDice(correctAnswer,yourAnswer, whoStart, numberDice);

		}
		whoStart++;
	} while(isCorrectUser != true && isCorrectComputer != true);

	do{
		userInput = prompt("Round two is over. Type begin to start round three!");
	}while(userInput.toUpperCase() != "BEGIN");

	whoStart -= 1;

	beginRound3(whoStart);
}

function beginRound3(whoStart){

	let diceSides = 8;
	let numberDice = 6;
	let correctAnswer = [1,1,1,8,8,8];
	let computerAnswer = [];
	let yourAnswer = [];
	let isCorrectComputer;
	let isCorrectUser;
	let userInput;

	tempScore *= 2;
	if(numRound == 2){
		console.log("Round 3");
		console.log("In round three, your goal will be to get three sets of three of a kind - ones and eights. You will be playing with 6 eight-sided dice.");
		tempScore = 200; numRound++;
	}

		do{
			userInput = prompt("Type roll when you are ready!")
	}while(userInput.toUpperCase() != "ROLL");

	do{
		if(whoStart % 2 != 0){

			for(let i = 0; i < numberDice; i++ ){
				
				computerAnswer[i] = rollDice(diceSides);

			}
			isCorrectComputer = compareDice(correctAnswer,computerAnswer, whoStart, numberDice);

		}
		else{
			for(let i = 0; i < numberDice; i++ ){
				
				yourAnswer[i] = rollDice(diceSides);

			}
			isCorrectUser = compareDice(correctAnswer,yourAnswer, whoStart, numberDice);

		}
		whoStart++;
	} while(isCorrectUser != true && isCorrectComputer != true);

	do{
		userInput = prompt("Round three is over. Type begin to start round four!");
	}while(userInput.toUpperCase() != "BEGIN");

	whoStart -= 1;

	beginRound4(whoStart);
}

function beginRound4(whoStart){

}

function beginRound5(whoStart){

}

function beginRound6(whoStart){

}

function beginPig(whoStart){

}

function compareDice(correct, potential, whoStart, number){

	let check = 0;
	let isCorrect;
	let doubleDown;
	let userInput;

	potential.sort(function(a,b){return a-b});

	if(whoStart % 2 != 0){
	
		for(let i = 0; i < correct.length; i++){

			if(potential[i] == correct[i]){

				check++;

			}
			else{return false;}
		}

		if(numRound == currentRound){
			currentRound++;
			if(check == number){
				console.log("The computer won and has been awarded " + tempScore + " points. Does he want to double down?")
				console.log(potential);
				doubleDown = Math.ceil(Math.random() * 3);

				if(doubleDown == 1){

					console.log("The computer has chosen to roll again!")
					if(currentRound == 2){
						beginRound1(1);
					}
					else if(currentRound == 3){
						beginRound2(1);
					}
					else if(currentRound == 4){
						beginRound3(1);
					}
					else if(currentRound == 5){
						beginRound4(1);
					}
					else if(currentRound == 6){
						beginRound5(1);
					}
					else{
						beginRound6(1);
					}

				}
				else{

					console.log("The computer has decided to keep his points and begin the next round!");
					scoreKeeper(tempScore, 1);
					return true;
				}
				
			}
		}
		else{
			console.log("The computer won the double down round and we will now begin the next round.");
			scoreKeeper(tempScore,1);
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

		if(numRound == currentRound){
			currentRound++;
			if(check == number){
				console.log("You won round one and are awarded " + tempScore +" points! Do you want to double down?");
				console.log(potential);

				do{
					userInput = prompt("Type roll to roll again. Otherwise type no to begin next round!");
				} while(userInput.toUpperCase() != "ROLL" && userInput.toUpperCase() != "NO");

				if(userInput.toUpperCase() == "ROLL"){

					console.log("Let`s play the round again!");

						if(currentRound == 2){
							beginRound1(1);
						}
						else if(currentRound == 3){
							beginRound2(1);
						}
						else if(currentRound == 4){
							beginRound3(1);
						}
						else if(currentRound == 5){
							beginRound4(1);
						}
						else if(currentRound == 6){
							beginRound5(1);
						}
						else{
							beginRound6(1);
						}

				}
				else{

					console.log("Let`s begin the next round!");
					scoreKeeper(tempScore,2);
					return 2;
				}
			}
		}
		else{
			console.log("You won the double down round and we will now begin the next round!");
			scoreKeeper(tempScore,2);
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

function scoreKeeper(scoreUpdate, whichScore){

	if(whichScore == 1){
		let i;
		computerScore += scoreUpdate
		console.log("Computer score is: " + computerScore + " and your score is: " + userScore + " .");
		return computerScore;
	}
	else if(whichScore == 2){

		userScore +=scoreUpdate;
		console.log("Your score is: " + userScore + " and the computer`s score is: " + computerScore);
		return userScore;
	}
}