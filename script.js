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

		//This test on every move if the there if a winner or if the count is 9 if not it continues
		var eval = test(document.querySelectorAll(".key"));
		if(check(eval).length > 1 && check(eval)[1] != ""  || count === 9){
			evaluate();
			}
		
		
		
	});

	$(".reset").click(function(){
		location.reload();
	});
	

});


function evaluate(){
		arr = test(document.querySelectorAll(".key"));
console.log();

			if(check(arr).length > 1){

				document.getElementsByClassName("result")[0].childNodes[3].innerText =  check(arr)[1]+" : Win";

				$(".result")[0].style.display = 'block'; 
				$(".container").addClass("disabled");
				
			}else if(!check(arr)[0]){
				document.getElementsByClassName("result")[0].childNodes[3].innerText =  "Draw";
				$(".result")[0].style.display = 'block'; 
				$(".container").addClass("disabled");


			}
}

function test(arr){
	var arreglo = [];

		for (var i = 0; i < arr.length; i++) {
			arreglo.push(arr[i].innerText);
		};

		return arreglo;
}

function check(exp){
	var result = [];
	result.push(false);

	    if ((exp[0].localeCompare(exp[3]) === 0 && exp[0].localeCompare(exp[6])) === 0 && exp[0] != ""){
	    	result.push(exp[0]);
	    	result[0] = true;

	    }else if((exp[1].localeCompare(exp[4]) === 0 && exp[1].localeCompare(exp[7])) === 0 && exp[1] != ""){
	    	result.push(exp[1]);
	    	result[0] = true;

	    }else if ((exp[2].localeCompare(exp[5]) === 0 && exp[2].localeCompare(exp[8])) === 0 && exp[2] != ""){
	        result.push(exp[2]);
	    	result[0] = true;

	    }else if ((exp[0].localeCompare(exp[4]) === 0 && exp[0].localeCompare(exp[8])) === 0 && exp[0] != ""){
	    	result.push(exp[0]);
	    	result[0] = true;

	    }else if ((exp[6].localeCompare(exp[7]) === 0 && exp[6].localeCompare(exp[8])) === 0 && exp[6] != ""){
	    	result.push(exp[6]);
	    	result[0] = true;

	    }else if ((exp[3].localeCompare(exp[4]) === 0 &&  exp[3].localeCompare(exp[5])) === 0 && exp[3] != ""){
	    	result.push(exp[3]);
	    	result[0] = true;

	    }else if ((exp[0].localeCompare(exp[1]) === 0 && exp[0].localeCompare(exp[2])) === 0 && exp[0] != ""){ 
	    	result.push(exp[0]);
	    	result[0] = true;

	    }else if ((exp[6].localeCompare(exp[4]) === 0 && exp[6].localeCompare(exp[2])) === 0 && exp[6] != ""){
	    	result.push(exp[6]);
	    	result[0] = true;
	    }

	    return result;	
	}




