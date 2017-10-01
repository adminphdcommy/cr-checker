var crinput = document.getElementById("textarea1").value
document.getElementById("textarea1").addEventListener("keydown", checkcr);
document.getElementById("output001").innerHTML = crinput

var keyword = ["PO","pending order", "delete"]

var keywordset = [
{word:["PO","pending order","Submit PO"],message:["Do you need to post registry?"]},
{word:["delete"],message:["Do you want to delete in system?"]},
]





console.log("keywordset[0].word[0] = " + keywordset[0].word[0])


function checkcr(){
	
	var crinput = document.getElementById("textarea1").value
	var inputarray = crinput.split(" ");
	console.log(inputarray[0])
	console.log(inputarray[1])
	console.log(inputarray.length)
	console.log(keyword.length)
	
	document.getElementById("output001").innerHTML = ""
	
	for(i=0;i<inputarray.length;i++){
		var currentcombine = inputarray[i] + " " + inputarray[i+1] 
		console.log("Input word : " + inputarray[i])
		console.log("combine word is : " + " " + currentcombine)
		console.log(" ")
		for(j=0;j<keywordset.length;j++){
			console.log("Checking keyword : " + keyword[j])
			console.log(" ")
			for(k=0;k<keywordset[j].word.length;k++){
				if(inputarray[i] == keywordset[j].word[k] ){
				
					document.getElementById("output001").innerHTML += keyword[j] + ", "
					console.log("if " + i + j)
					console.log("--------- ")
					console.log(" ")
				
			}
				else if (currentcombine == keyword[j]){
					
					document.getElementById("output001").innerHTML += currentcombine + ", "
					console.log("if 2")
			}
			
			
			}
		}
	}
	
	
	
	
	
	
}


