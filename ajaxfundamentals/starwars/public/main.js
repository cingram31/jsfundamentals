$(document).ready(function(){
	localStorage.clear();
	if(localStorage.getItem('planets')){
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/planets/',
		}).done(function(planets){
			let planetsObj = {
				planets : []
			}
			planets.results.forEach(function(p){
				$("#planets").append'<tr><td>'+ p.name + '</td></tr>')
				planetsObj.planets.push(p.name)
			})
			localStorage.setItem('planets', JSON.stringify(planetsObj))
		})
	}

	if(!localStorage.getItem('wookie')){
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/planets/?format=wookiee',
		}).done(function(planets){
			let planetsObj = {
				planets : []
			}
			planets.results.forEach(function(p){
				planetsObj.planets.push(p)
			})
		})
	}