//user will always be 2 (even) and computer will always be 1 (odd).
let userScore = 0;
let computerScore = 0;
let tempScore = 0;
let numRound = 0;
let currentRound = 1;
let buttonNum = 0;

document.getElementById("whichRound").innerHTML = "RULES";
document.getElementById("roundRules").innerHTML = "Welcome to DoubleDown! The goal of the game is to beat the computer by rolling specific dice combinations."
+ " If you win the round by rolling the combination first you can choose to double down and try to double the round score. If you win the double down, your round score will double and we will move to the next round."
+ " However, if you lose the double down round, the opponent will get the double score for that round. Whoever has more points after round six will have an advantage when playing Pig to win the game. Good luck!";
document.getElementById("gameScreenText").innerHTML = "Welcome to the game! Press roll below to see who will go first!";

document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

document.getElementById("rollButton").onclick = function(){ startGame(); }


function startGame(){

	let userInput;
	let test;
	let firstRoll;

	test = initialRoll();

	if(test == true){

		document.getElementById("gameScreenText").innerHTML = "The computer won the roll and will begin the first round." 
		+ "<br /> Press begin to start the game.";
		
		firstRoll = 1;
	}

	else{

		document.getElementById("gameScreenText").innerHTML = "You won the roll and will begin the first round."
		+ "<br /> Press begin to start the game.";
		
		firstRoll = 2;
	}

	document.getElementById("beginButton").onclick = function(){ beginRound1(firstRoll); }
} 

function beginRound1(whoStart){

	let diceSides = 4;
	let numberDice = 4;
	let correctAnswer = [1,2,3,4];
	let computerAnswer = [];
	let yourAnswer = [];
	let isCorrectComputer;
	let isCorrectUser;
	let userInput;

	document.getElementById("whichRound").innerHTML = "ROUND 1";
	document.getElementById("roundRules").innerHTML = "The goal of round 1 is to get a straight of 1,2,3,4. You will be playing with four 4-sided dice.";

	tempScore *= 2;
	if(numRound == 0){
		
		tempScore = 100; numRound++;

		if(buttonNum != 0){
			tempScore = 200;
		}

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
	}
	whoStart -= 1;

	if(buttonNum == 0){

		document.getElementById("rollButton").onclick = function(){ numRound--; buttonNum++;  beginRound1(whoStart);}
		document.getElementById("beginButton").onclick = function(){ scoreKeeper(tempScore, 2);buttonNum++; beginRound2(whoStart);}
	}
	else{
		document.getElementById("beginButton").onclick = function(){if(buttonNum > 1) { buttonNum = 1;} beginRound2(whoStart);}
		document.getElementById("rollButton").onclick = function(){};
	}
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

		document.getElementById("whichRound").innerHTML = "ROUND 2";
		document.getElementById("roundRules").innerHTML = "The goal of round 2 is to get a full house threes over twos (2,2,3,3,3). You will be playing with five 6-sided dice.";
		document.getElementById("gameScreenText2").innerHTML = "";
		
		tempScore = 200; numRound++;

		if(buttonNum != 1){
			tempScore = 400;
		}

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
	}
	whoStart -= 1;

	if(buttonNum == 1){

		document.getElementById("rollButton").onclick = function(){ numRound--; buttonNum++; beginRound2(whoStart);}
		document.getElementById("beginButton").onclick = function(){ scoreKeeper(tempScore, 2);buttonNum++; beginRound3(whoStart);}
	}
	else{
		document.getElementById("beginButton").onclick = function(){ if(buttonNum > 2) { buttonNum = 2;} beginRound3(whoStart); }
		document.getElementById("rollButton").onclick = function(){};
	}
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
		
		document.getElementById("whichRound").innerHTML = "ROUND 3";
		document.getElementById("roundRules").innerHTML = "The goal of round 3 is to get three-of-a-kind of ones and eights (1,1,1,8,8,8). You will be playing with six 8-sided dice.";
		document.getElementById("gameScreenText2").innerHTML = "";

		tempScore = 300; numRound++;

		if(buttonNum != 2){
			tempScore = 600;
		}

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
	}
	whoStart -= 1;

	if(buttonNum == 2){

		document.getElementById("rollButton").onclick = function(){ numRound--; buttonNum++; beginRound3(whoStart);}
		document.getElementById("beginButton").onclick = function(){ scoreKeeper(tempScore, 2);buttonNum++; beginRound4(whoStart);}
	}
	else{
		document.getElementById("beginButton").onclick = function(){if(buttonNum > 3) { buttonNum = 3;} beginRound4(whoStart); }
		document.getElementById("rollButton").onclick = function(){};
	}
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
		
		document.getElementById("whichRound").innerHTML = "ROUND 4";
		document.getElementById("roundRules").innerHTML = "The goal of round 4 is to get a straight of 2 through 7 and a single 10. You will be playing with seven 10-sided dice.";
		document.getElementById("gameScreenText2").innerHTML = "";

		tempScore = 400; numRound++;

		if(buttonNum != 3){
			tempScore = 800;
		}

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
	}
	whoStart -= 1;

	if(buttonNum == 3){

		document.getElementById("rollButton").onclick = function(){ numRound--; buttonNum++; beginRound4(whoStart);}
		document.getElementById("beginButton").onclick = function(){ scoreKeeper(tempScore, 2);buttonNum++; beginRound5(whoStart);}
	}
	else{
		document.getElementById("beginButton").onclick = function(){if(buttonNum > 4) { buttonNum = 4;} beginRound5(whoStart); }
		document.getElementById("rollButton").onclick = function(){};
	}
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
		
		document.getElementById("whichRound").innerHTML = "ROUND 5";
		document.getElementById("roundRules").innerHTML = "The goal of round 5 is to get four of a kind of 12s. You will be playing with four 12-sided dice.";
		document.getElementById("gameScreenText2").innerHTML = "";


		tempScore = 500; numRound++;

		if(buttonNum != 4){
			tempScore = 1000;
		}

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
	}
	whoStart -= 1;

	if(buttonNum == 4){

		document.getElementById("rollButton").onclick = function(){ numRound--; buttonNum++; beginRound5(whoStart);}
		document.getElementById("beginButton").onclick = function(){ scoreKeeper(tempScore, 2);buttonNum++; beginRound6(whoStart);}
	}
	else{
		document.getElementById("beginButton").onclick = function(){if(buttonNum > 5) { buttonNum = 5;} beginRound6(whoStart); }
		document.getElementById("rollButton").onclick = function(){};
	}
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
		
		document.getElementById("whichRound").innerHTML = "ROUND 6";
		document.getElementById("roundRules").innerHTML = "The goal of round 6 is to get a single 20. You will be playing with one 20-sided dice.";
		document.getElementById("gameScreenText2").innerHTML = "";

		tempScore = 600; numRound++;

		if(buttonNum != 5){
			tempScore = 1200;
		}

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
	}
	whoStart -= 1;

	if(buttonNum == 5){

		document.getElementById("rollButton").onclick = function(){ numRound--; buttonNum++; beginRound6(whoStart);}
		document.getElementById("beginButton").onclick = function(){ scoreKeeper(tempScore, 2);buttonNum++; beginPig(whoStart);}
	}
	else{
		document.getElementById("beginButton").onclick = function(){if(buttonNum > 6) { buttonNum = 6;} beginPig(whoStart); }
		document.getElementById("rollButton").onclick = function(){};
	}
}

function beginPig(whoStart){

	document.getElementById("whichRound").innerHTML = "PIG";
	document.getElementById("roundRules").innerHTML = "Welcome to PIG! This is the last and final round."
	+ " In this round, your goal will be to the first one to get a score of 100.";

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
	
				console.log(potential);

				doubleDown = Math.ceil(Math.random() * 3);

				if(userScore > computerScore && numRound == 5){
					doubleDown = 1;
				}
				if(doubleDown == 1){

					document.getElementById("gameScreenText").innerHTML = "The computer won the round with " + potential 
					+ " and decided to try his luck on a double down!";

					 beginRound1(whoStart);
				}
				else{

					document.getElementById("gameScreenText").innerHTML = "The computer won the round with " + potential 
					+ " and decided to keep his points and begin the next round. Press begin to start.";
					scoreKeeper(tempScore, 1);
					buttonNum++;
					return true;
				}
				
			}
		}
		else{

			document.getElementById("gameScreenText2").innerHTML = "The computer has won the double down round!" 
			+ "<br /> Press begin to start the next round";
			scoreKeeper(tempScore,1);
			buttonNum++;
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
				document.getElementById("gameScreenText").innerHTML = "You won the round with " + potential + "! Would you like to try the double down round? " 
				+ "<br /> Press roll to play or begin to start the next round.";

				return true;
			}
		}
		else{
			
			document.getElementById("gameScreenText2").innerHTML = "You won the double down round!" 
			+ "<br /> Press begin to start the next round";
			buttonNum++;
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

		computerScore += scoreUpdate
		document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";

		// return computerScore;
	}
	else if(whichScore == 2){

		userScore +=scoreUpdate;
		document.getElementById("gameScreen").innerHTML = "Computer Score: " + computerScore + " <br /> User Score: " + userScore + "<br />";
		// return userScore;
	}
}
