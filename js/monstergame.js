/**
 * Created by mattpowell on 4/28/16.
 */

                     
// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ['Steak', 'Sushi', 'Peaches', 'Glass', 'Tinfoil', 'Dirt'];
var currentfood = "";

// start the game with a function
function rungame(){
    var thefood = getfood();
    setfood(thefood);
}

// randomly select a food to put in the box
function getfood(){
	var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    return foodarr[randomfood];
}

// put the food in the box
function setfood(food){
	currentfood = food;
	document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
	//if the food is good
	if(currentfood == "Steak" || currentfood == "Sushi" || currentfood == "Peaches"){
		document.getElementById("commentbox").innerHTML = "Oh, that's money!";
	var thefood = getfood();
    setfood(thefood);
    }
	// if the food is bad
	else{
		document.getElementById("commentbox").innerHTML = "Bleh, that's disgusting!";
	}
	
}

function trashit(){
	//if the food is good
	if(currentfood == "Steak" || currentfood == "Sushi" || currentfood == "Peaches"){
		document.getElementById("commentbox").innerHTML = "Hey! Why would you waste such glorious mana?";

	}
	// if the food is bad
	else{
		document.getElementById("commentbox").innerHTML = "Good call";
        var thefood = getfood();
        setfood(thefood);
    }
	
}

                     
