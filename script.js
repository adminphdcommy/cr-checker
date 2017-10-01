var crinput = document.getElementById("textarea1").value
document.getElementById("textarea1").addEventListener("keyup", checkcr);
document.getElementById("textarea1").addEventListener("keyup", counter);
document.getElementById("output001").innerHTML = crinput

var keyword = ["PO","pending order", "delete"]


var keywordset = [
{word:["PO","pending order","Submit PO","po","delete po","delete PO"],message:["Do you need to post registry?"]},
{word:["delete"],message:["Do you want to delete in system?"]},
]







function checkcr(){
	
	var crinput = document.getElementById("textarea1").value
	var inputarray = crinput.split(" ");
	
	document.getElementById("output001").innerHTML = ""
	
	for(i=0;i<inputarray.length;i++){
		var currentcombine = inputarray[i] + " " + inputarray[i+1] 
		
		
		for(j=0;j<keywordset.length;j++){
			
			for(k=0;k<keywordset[j].word.length;k++){
				if (currentcombine == keywordset[j].word[k]){
					
					document.getElementById("output001").innerHTML += currentcombine + " : " +keywordset[j].message +"<br>"

					
				}
				else if(inputarray[i] == keywordset[j].word[k] ){
				
					document.getElementById("output001").innerHTML += keywordset[j].word[k] + " : " +keywordset[j].message +"<br>"
					console.log(keywordset[j].word[k])
					console.log("--------- ")


				
			}
				
			
			
			
			}
		}
	}
	
	
	
	
	
	
}

function counter(){
	var brnum = [document.getElementById("output001").children]
	var count = 0
	console.log(brnum)
	console.log(brnum[0].length)
	for(i=0;i<brnum[0].length;i++){
		console.log(brnum[0][i])
		if(brnum[0][i].outerHTML == '<br>'){
			count = count + 1
			
		}
	}
	//console.log(brnum)
	document.getElementById("counter1").innerHTML = "(" + count + ")"
}


//counter = counter +1
//document.getElementById("counter1").innerHTML = counter







