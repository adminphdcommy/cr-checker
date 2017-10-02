var crinput = document.getElementById("textarea1").value
document.getElementById("textarea1").addEventListener("keyup", checkcr);
document.getElementById("textarea1").addEventListener("keyup", counter);
document.getElementById("output001").innerHTML = crinput

var keyword = ["PO","pending order", "delete"]


var keywordset = [
{word:["PO","pending order","Submit PO","po","delete po","delete PO"],message:["Do you need to post registry?"]},
{word:["delete"],message:["Do you want to delete in system?"]},
]

var keywordlist = []

function keywordlisting(){
	
	for(i=0;i<keywordset.length;i++){
		for(j=0;j<keywordset[i].word.length;j++){
			keywordlist.push( " " + keywordset[i].word[j])
		}
		
	}	
}


keywordlisting()


document.getElementById("keywordlist").innerHTML = keywordlist





function checkcr(){
	
	var crinput = document.getElementById("textarea1").value
	var inputarray = crinput.split(/[" "\n\.]/);
	console.log(inputarray)
	var rowcountarray = crinput.split(/\n/gm);
	console.log(rowcountarray)
	
	document.getElementById("output001").innerHTML = ""
	
	for(i=0;i<inputarray.length;i++){
		var currentcombine = inputarray[i] + " " + inputarray[i+1] 
		
		
		for(j=0;j<keywordset.length;j++){
			
			for(k=0;k<keywordset[j].word.length;k++){
				if (currentcombine == keywordset[j].word[k]){
					
					document.getElementById("output001").innerHTML += currentcombine + "(" + i + ") : " +keywordset[j].message +"<br>"

					
				}
				else if(inputarray[i] == keywordset[j].word[k] ){
				
					document.getElementById("output001").innerHTML += keywordset[j].word[k] + "(" + i + ") : " +keywordset[j].message +"<br>"
					


				
			}
				
			
			
			
			}
		}
	}
	
	
	
	
	
	
}

function counter(){
	var brnum = [document.getElementById("output001").children]
	var count = 0
	
	for(i=0;i<brnum[0].length;i++){
		if(brnum[0][i].outerHTML == '<br>'){
			count = count + 1
			
		}
	}
	//console.log(brnum)
	document.getElementById("counter1").innerHTML = "(" + count + ")"
}


//counter = counter +1
//document.getElementById("counter1").innerHTML = counter







