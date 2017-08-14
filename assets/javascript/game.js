//Setting the global random number displayed for the user
$( document ).ready(function(){
	var usrRandom=Math.floor(Math.random()* 101+19)
	$('#number').text(usrRandom);

//	Global number vars (Number generator array, wins/losses, total)
	var NumGenerator = []
	var wins= 0;
	var losses = 0;
	var total= 0;		

//Random Numbers for the crystals
function crystalRandNums(){
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random()*11+1);
		NumGenerator.push(num);
	}
}
crystalRandNums();

//Game Reset after win or loss - Gives New Random Value
function gameReset(){
        usrRandom=Math.floor(Math.random()* 101+19);
        // console.log(usrRandom)
        $('#number').text(usrRandom);
        NumGenerator = [];
        crystalRandNums();
        total= 0;
        $('#score').text(total);
} 
//Win function
function usrWin(){
	alert("You Win!");
		wins++;	
		$('#countWins').text(wins);
		gameReset();
}
//Loss function
function usrLose(){
	alert ("You lose!");
		losses++;
		$('#countLosses').text(losses);
		gameReset();
}
//Crystal Clicking  Functions
//Function for clicking on crystal 1
$('#cOne').on('click', function(){
	total = total + NumGenerator[0];
	// console.log("New total= " + total);
	$('#score').text(total);	
		//win/lose conditions
		if (total == usrRandom){
			usrWin();
		} else if ( total > usrRandom){
			usrLose();
		}		
})	
//Function for clicking on crystal 2
$('#cTwo').on('click', function(){
	total = total + NumGenerator[1];
	// console.log("New total= " + total);
	$('#score').text(total);	
		if (total == usrRandom){
			usrWin();
		} else if ( total > usrRandom){
			usrLose();
		}	
})	
//Function for clicking on crystal 3
$('#cThree').on('click', function(){
	total = total + NumGenerator[2];
	// console.log("New total= " + total);
	$('#score').text(total);
		if (total == usrRandom){
			usrWin();
		}	else if ( total > usrRandom){
			usrLose();
		}	
})	
//Function for clicking on crystal 4 
$('#cFour').on('click', function(){
	total = total + NumGenerator[3];
	// console.log("New total= " + total);
		$('#score').text(total);					
			if (total == usrRandom){
				usrWin();
			} else if ( total > usrRandom){
				usrLose();
			}
 });  	

});	