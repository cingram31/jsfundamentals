// Arrays

let students = ['Thomas', 'Madyson', 'Bradon', 'Leon', 23, true, ['Jackson', 'Perry']];

console.log(typeof(students));

console.log(students[2])

//Grab the nested array out of the students array and grab 'Perry' then print
//to the console "Hello Perry the Platypus"
console.log("Hello",students[6][1], "the Platypus.");

var arrOfFood = ['Quesadilla', 'Pecan Pie', 'Potato', 'Cheesecake', 'Shrimp Pasta'];


//Prints out the value instead of the index number

arrOfFood.push('NY Style Pizza');

// index of item / How many to cut / What you want to replace it with
arrOfFood.splice(1, 1, "Blueberry Pie");
arrOfFood.splice(2, 0, 'Sweet Potato');
arrOfFood.splice(4, 2)
arrOfFood.pop();




for (let f of arrOfFood){
	console.log(f)
}


// for(Let foodItem of arrOfood){
//	console.log(foodItem);
// }
arrOfFood.forEach(function(foodItem, banana){
	console.log(banana);
	console.log(foodItem);
})




