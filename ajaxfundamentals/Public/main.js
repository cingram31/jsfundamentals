$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/planets/'

	}).done(function(planets){
		//console.log(data.results[0].name)
		planets.results.forEach(function(planets){
		console.log(planet.name)
	})

			for( var planet in planets.results){
				console.log(planets.results[planet].name)
			}
		
	})



for( var planet in planets.results){
	console.log(planets.results[planet].name)
	}