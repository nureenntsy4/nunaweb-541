let result=document.getElementById("result");

function display(num) {
    result.value+=num;
}

function calc(){
	try{
		result.value=eval(result.value);
		alert("You owe me RM " + result.value + " !")
	}
	catch(err){
		alert("Invalid amount")
	}
}

function clearResult(){
	result.value="";
}

function del(){
	result.value=result.value.slice(0,-1);
}