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

			if(check(arr).length > 1){

				document.getElementsByClassName("result")[0].childNodes[3].innerText =  check(arr)[1]+" : Win";

				$(".result")[0].style.display = 'block'; 
				$(".container").addClass("disabled");
				
			}else{
				document.getElementsByClassName("result")[0].childNodes[3].innerText =  "Draw";
				return "Draw";


			}
		}
		
		
	});

	$(".reset").click(function(){
		location.reload();
	});

});


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

	    if ((exp[0].localeCompare(exp[3]) + exp[0].localeCompare(exp[6])) === 0){
	    	result.push(exp[0]);
	    	result[0] = true;

	    }else if((exp[1].localeCompare(exp[4]) + exp[1].localeCompare(exp[7])) === 0){
	    	result.push(exp[1]);
	    	result[0] = true;

	    }else if ((exp[2].localeCompare(exp[5]) + exp[2].localeCompare(exp[8])) === 0){
	        result.push(exp[2]);
	    	result[0] = true;

	    }else if ((exp[0].localeCompare(exp[4]) + exp[0].localeCompare(exp[8])) === 0){
	    	result.push(exp[0]);
	    	result[0] = true;

	    }else if ((exp[6].localeCompare(exp[7]) + exp[6].localeCompare(exp[8])) === 0){
	    	result.push(exp[6]);
	    	result[0] = true;

	    }else if ((exp[3].localeCompare(exp[4]) + exp[3].localeCompare(exp[5])) === 0){
	    	result.push(exp[3]);
	    	result[0] = true;

	    }else if ((exp[0].localeCompare(exp[1]) + exp[0].localeCompare(exp[2])) === 0){ 
	    	result.push(exp[0]);
	    	result[0] = true;

	    }else if ((exp[6].localeCompare(exp[4]) + exp[6].localeCompare(exp[2])) === 0){
	    	result.push(exp[6]);
	    	result[0] = true;
	    }

	    return result;	
	}




