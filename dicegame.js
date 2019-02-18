
let userScore = 0;
let computerScore = 0;
let tempScore = 0;
let numRound = 0;
let currentRound = 1;

document.getElementById("gameScreenText").innerHTML = "Welcome to the game! Press roll below to see who will go first!";

document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

document.getElementById("rollButton").onclick = function(){ startGame(); }

function startGame(){

	let userInput;
	let firstRoll;
	let test;

	test = initialRoll();

	if(test == true){

		document.getElementById("gameScreenText").innerHTML = "The computer won the roll and will begin the first round.";
		firstRoll = 1;
	}

	else{

		document.getElementById("gameScreenText").innerHTML = "You won the roll and will begin the first round.";
		firstRoll = 2;
	}

	//beginRound1(firstRoll);
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

	document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

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

	document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

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
		console.log("In round three, your goal will be to get two sets of three of a kind - ones and eights. You will be playing with 6 eight-sided dice.");
		tempScore = 300; numRound++;
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

	document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

	do{
		userInput = prompt("Round three is over. Type begin to start round four!");
	}while(userInput.toUpperCase() != "BEGIN");

	whoStart -= 1;

	beginRound4(whoStart);
}

function beginRound4(whoStart){

	let diceSides = 10;
	let numberDice = 7;
	let correctAnswer = [2,3,4,5,6,7,10];
	let computerAnswer = [];
	let yourAnswer = [];
	let isCorrectComputer;
	let isCorrectUser;
	let userInput;

	tempScore *= 2;
	if(numRound == 3){
		console.log("Round 4");
		console.log("In round four, your goal will be to get a straight of 2, 3, 4, 5, 6, and 7 and also the number 10. You will be playing with 7 ten-sided dice.");
		tempScore = 400; numRound++;
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

	document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

	do{
		userInput = prompt("Round four is over. Type begin to start round five!");
	}while(userInput.toUpperCase() != "BEGIN");

	whoStart -= 1;

	beginRound5(whoStart);
}

function beginRound5(whoStart){

	let diceSides = 12;
	let numberDice = 4;
	let correctAnswer = [12,12,12,12];
	let computerAnswer = [];
	let yourAnswer = [];
	let isCorrectComputer;
	let isCorrectUser;
	let userInput;

	tempScore *= 2;
	if(numRound == 4){
		console.log("Round 5");
		console.log("In round five, your goal will be to get four 12`s. You will be playing with 4 twelve-sided dice.");
		tempScore = 500; numRound++;
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

	document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

	do{
		userInput = prompt("Round five is over. Type begin to start round six!");
	}while(userInput.toUpperCase() != "BEGIN");

	whoStart -= 1;

	beginRound6(whoStart);
}

function beginRound6(whoStart){

	let diceSides = 20;
	let numberDice = 1;
	let correctAnswer = [20];
	let computerAnswer = [];
	let yourAnswer = [];
	let isCorrectComputer;
	let isCorrectUser;
	let userInput;

	tempScore *= 2;
	if(numRound == 5){
		console.log("Round 5");
		console.log("Welcome to the final round! Your goal in the final round will be to get a single 20 using one 20-sided dice.");
		tempScore = 600; numRound++;
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

	document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

	if(computerScore > userScore){

		console.log("The final round is over and the computer had the higher score of: " + computerScore + ". Because of this, the computer will be playing Pig with more dice.");
		whoStart = 1;
	}
	else{

		console.log("The final round is over and you had a higher final score of: " + userScore + ". Because of this, you will be playing Pig with more dice.");
		whoStart = 2;
	}

	do{
		userInput = prompt("Type begin to start a game of Pig to determine the winner of the game.");
	}while(userInput.toUpperCase() != "BEGIN");

	beginPig(whoStart);
}

function beginPig(whoStart){

	let userInput;
	let diceSides = 6;
	computerScore = 0;
	userScore = 0;
	let computerDice;
	let userDice;
	let round = 1;

	document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";
	console.log("Welcome to Pig! This round will determine the winner. The winner of the first six rounds will be allowed to use 6 dice to play while the loser will only be allowed to use four. First to 100 points is the winner! Good luck!");

	if(whoStart == 1){
		userDice = 4;
		computerDice = 6;
	}
	else{
		userDice = 6;
		computerDice = 4;
	}

	do{
		userInput = prompt("Type roll when you are ready!")
	}while(userInput.toUpperCase() != "ROLL");

	do{

		for(let i = 0; i < computerDice; i++ ){
				
			computerScore += rollDice(diceSides);

		}
		for(let i = 0; i < userDice; i++ ){
				
			userScore += rollDice(diceSides);

		}

		document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

		if(computerScore < 100 && userScore < 100){
			do{
				userInput = prompt("Type roll to begin the next round of Pig");
			}while(userInput.toUpperCase() != "ROLL");
		}

		round++;

	} while(computerScore < 100 && userScore < 100);

	if(computerScore > userScore){

		console.log("Unfortunately, the computer has won the game...would you like to play again?")

		do{
			userInput = prompt("Type yes to play again or no to exit the game.")
		}while(userInput.toUpperCase() != "YES" && userInput.toUpperCase() != "NO");

		if(userInput.toUpperCase() == "YES"){

			console.log("Beginning new game now.");

			userScore = 0;
			computerScore = 0;
			tempScore = 0;
			numRound = 0;
			currentRound = 1;

			startGame();
		}
		else{
			console.log("Thanks for playing!");
			debugger;
		}

	}
	else{

		console.log("Congrats! You won the game!")

		do{
			userInput = prompt("Type yes to play again or no to exit the game.")
		}while(userInput.toUpperCase() != "YES" && userInput.toUpperCase() != "NO");

		if(userInput.toUpperCase() == "YES"){

			console.log("Beginning new game now.");

			userScore = 0;
			computerScore = 0;
			tempScore = 0;
			numRound = 0;
			currentRound = 1;

			startGame();
		}
		else{
			console.log("Thanks for playing!");
			debugger;
		}
	}

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

				if(userScore > computerScore && numRound == 5){
					doubleDown = 1;
				}
				if(doubleDown == 1){

					console.log("The computer has chosen chance his luck on a double down!")
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
				console.log("You won the round and are awarded " + tempScore +" points! Do you want to double down?");
				console.log(potential);

				do{
					userInput = prompt("Type roll to try the double down round, otherwise type no to begin next round!");
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
					return true;
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

function clicker(){

	return true;
}