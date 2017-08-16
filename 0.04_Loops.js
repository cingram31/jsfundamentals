// Loops

/*


		Lcv loop control

		for Loop
		---------------------------------


		while Loop
		---------------------------------

		for in Loop
		---------------------------------


		do while Loop
		---------------------------------
		runs at least once



*/

// initialize var; have a boolean expression; 
for ( var i = 0; i < 10; i = i +1){
	console.log(i)
}

// Challenge using a for loop count to 20 by 2's
for ( var i = 0; i < 20; i = i + 2){
	console.log(i)
}


//initilize variable
var j = 0
// boolean expression
while ( j < 5) {


	//step through the Loop
	j = j + 1  // j +=  // j++
	
	console.log(j)

}


//while(true){
//	console.log("runs once");
//	return false; break
}


// challenge create a while loop that counts in 100 by 10's
var numTo10 = 0;
while ( numTo10 < 100 ){
	numTo10 += 10
	console.log(numTo10 < 100) {
		
	}
}


var studentName = "smita";
var capSN = "";
//  Lcv         collection
for ( var l in studentName ){
	if (l == 0){
		capSN = studentName[1].toUpperCase();
	}	else {
		capSN += studentName[1];
	}

	console.log(studentName[1])

}

//capitalize the first letter and rebuild the string
for ( var l = 1 ){
	studentName = studentName[1].toUpperCase
}























