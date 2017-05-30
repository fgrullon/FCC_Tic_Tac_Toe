$(function(){

	var moves = [];
	var x_or_o = "";

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
		moves.push(clase);
		console.log(moves)
		//alert(clase);
	});

});
