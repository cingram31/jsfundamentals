// Functions


function greeting() {
	console.log("Good Morning!");
}

// parenthesis invokes our function so that it runs the code inside of it
greeting();

// Challenge, create a funciton that says "Day 4 feeling great!" then call that function
function greeting(){
	console.log("Day 4 feeling great!");
}

//scope

// Void Functions

//Functions with parameters

function greeting2(name, age, height){
	console.log("Time to start coding " + name + age + height);
}
greeting2("Jay", 32)



function sum(num1, num2){
	console.log(num1 + num2)
}

sum(3 , 4)



//scope

var fname = "Aj";
var lname = "Hephner"


function hello(fname){
	console.log(fname + " " + lname)
}
console.log(lname); 

hello();


if ( 1 == 1){
	var sum = 1 + 1
	console.log(sum);//2
}

console.log(sum);//err

//create a function called capitalize() and use the for loop we created yesterday to 
//capitalize names


function capitalize(studentName){
	var newName ="";
	for ( var l in studentName) {

		if (1 == 0){
			//What happens if we use 3 equals?
		
		newName = studentName[1].toUpperCase();
	}else {
		newName+= studentName[1];
	}
}
return newName
}

console.log(capitalize('kenn'))









