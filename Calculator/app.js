//added the defer keyword to my script tag, to avoid script pre-loading problems

//DATA SETS
let operator = "";
let result = 0;
let initializedcalc = false;

//FUNCTIONS DEFINITIONS

const clear = () => {
	operator = "";
	result = 0;
	// console.log("info cleared");
	$screen.text("");
	$result.text("");
	initializedcalc = false;
	// console.log(result);
}

const calc = (num1, num2, operator) =>{
	switch(operator){
		case $plus.text():
		return num1 + num2;

		case $minus.text():
		return num1 - num2;

		case $mult.text():
		return num1 * num2;

		case $div.text():
		if (num2 != 0){
		return num1 / num2;}
		else{alert('cant divide by 0');
		return num1;}
	}
}


//DOM VARIABLES
$screen = $('#screen');
$plus = $('#plus');
$result = $('#result');
$minus = $('#minus')
$div = $('#div')
$mult = $('#mult')
$eq = $('#eq')
$operator = $('.operator')


//EVENT LISTENERS

$('#clear').on('click',clear)

$operator.on('click',(event) => {
	let num1;
	let num2;

	console.log(operator)
	if ($result.text() === "")
    	{}
	else{
		num1 = parseInt($result.text().replace(/\s+/g, ''));
		console.log(num1)
	}

	if ($screen.text() === "")
    	{}
	else{
		num2 = parseInt($screen.text().replace(/\s+/g, ''));
		console.log(num2)
		if (initializedcalc)
		{
			result = calc(num1,num2,operator);
			console.log(result);
			$result.text(result);
			$screen.text("");
		}
		else{initializedcalc = true;
			$result.text(num2);
			$screen.text("");

		}

	}
	operator = $(event.target).text();
	event.stopPropagation();



})

$eq.on('click',(event)=>{

	let num1;
	let num2;

	console.log(operator)
	if ($result.text() === "")
    	{}
	else{
		num1 = parseInt($result.text().replace(/\s+/g, ''));
	}

	if ($screen.text() === "")
    	{}
	else{
		num2 = parseInt($screen.text().replace(/\s+/g, ''));
		console.log(num2)
		if (initializedcalc)
		{
			result = calc(num1,num2,operator);
			console.log(result);
			$result.text(result);
			$screen.text("");
		}
		else{initializedcalc = true;
			$result.text(num2);
			$screen.text("");

		}
		}
		operator = "";
		event.stopPropagation();

})

$('.buttonrow').on('click',(event) =>{
	$('#screen').text($('#screen').text() + $(event.target).text());
	console.log($('#screen').text);
})




//THE PROGRAM
