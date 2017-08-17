//Objects

var food = {
	pies: ['Pecan' , 'Blueberry' , 'Cherry' , 'Key Lime'],
	getPies: function(){
		return this.pies;  //'this keyword' referring to food object
	},
	addPie: function(){
	//	return food.pies.forEach(function(newP){console.log(newP + " pie")}
	}
}
console.log(food.addPie())
//console.log(food.pies[0] + " pie")


//challenge iterate over the pie array and print out each pie, and add 'pie to them
//using the forEach() method

//food.pies.forEach(function(pie){
//	console.log(pie + " pie");
//})

//console.log(food.getPies())
//Create a method inside of the object food that appends ' pie' to the different
 //pies in the array List

	var food = {
	pies: ['Pecan' , 'Blueberry' , 'Cherry' , 'Key Lime'],
	getPies: function(){
		return this.pies;  //'this keyword' referring to food object
	},
	addPie: function(){
	//	return food.pies.forEach(function(newP){console.log(newP + " pie")}
	}
}
console.log(food.addPie())


// Create a method that adds the pies to a new array in the food object
getpieNames: function() {
	this.pies.forEach(function(pie){
		//console.log(pie)
		//console.log(food.pieNames)
		this.pieNames.push(pie + ' pie');
	}
}
console.log(food.getpieNames())



