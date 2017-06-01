$(function(){

	var moves = [];
	var x_or_o = "";
	var arr = [];
	var count = 0;

	$(".simbol > a").click(function(){
		x_or_o = $(this).attr("class").toUpperCase();

		$(".simbol")[0].style.display = 'none'; 
	});


	$(".container > a").click(function(){
		var clase = $(this).attr("class");
		if(x_or_o === "X"){
			x_or_o = "O";
		}else{
			x_or_o = "X";
		}

		document.getElementsByClassName(clase)[0].innerText =  x_or_o;

		count++;

		if(count === 9){
			arr = test(document.querySelectorAll(".key"));

			if(check(arr)){
				console.log("Win");
				return "Win";
			}else{
				console.log("Draw");
				return "Draw";

			}
		}
		
		
	});


	//var arr = document.querySelectorAll(".key")
	//console.log(arr[0].innerText);

});


function test(arr){
	var arreglo = [];

		for (var i = 0; i < arr.length; i++) {
			arreglo.push(arr[i].innerText);
		};

		return arreglo;
}

function check(exp){
	var result = false;
	console.log("hi");
	
	switch(exp) {

	    case ((exp[0].localeCompare(exp[3]) + exp[0].localeCompare(exp[6])) === 0):
	        result = true;
	        break;

	    case ((exp[1].localeCompare(exp[4]) + exp[1].localeCompare(exp[7])) === 0):
	        result = true;
	        break;

	        case ((exp[2].localeCompare(exp[5]) + exp[2].localeCompare(exp[8])) === 0):
	        result = true;
	        break;

	        case ((exp[0].localeCompare(exp[4]) + exp[0].localeCompare(exp[8])) === 0):
	        result = true;
	        break;

	        case ((exp[6].localeCompare(exp[7]) + exp[6].localeCompare(exp[8])) === 0):
	        result = true;
	        break;

	        case ((exp[3].localeCompare(exp[4]) + exp[3].localeCompare(exp[5])) === 0):
	        result = true;
	        break;

	        case ((exp[0].localeCompare(exp[1]) + exp[0].localeCompare(exp[2])) === 0):  
	        result = true;
	        break;
	        
	        case ((exp[6].localeCompare(exp[4]) + exp[6].localeCompare(exp[2])) === 0):
	        result = true;
	        break;
	}
	return result;	
}


