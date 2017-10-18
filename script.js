var crinput = document.getElementById("textarea1").value
document.getElementById("textarea1").addEventListener("keyup", checkcr);
document.getElementById("textarea1").addEventListener("keyup", counter);
document.getElementById("output001").innerHTML = crinput

var keyword = ["PO","pending order", "delete"]


var keywordset = [
{word:["PO","PENDING ORDER","Submit PO","po","delete po","delete PO"],message:["Do you need to post registry?"]},
{word:["delete"],message:["Do you want to delete in system?"]},
]

for(b=0;b<keywordset.length;b++){
	for(c=0;c<keywordset[b].word.length;c++){
		keywordset[b].word[c] = keywordset[b].word[c].toUpperCase()
	}
}

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
	//console.log(inputarray)
	var paracountarray = crinput.split(/[\n\r]/gm);
	
	for(a=0;a<paracountarray.length;a++){
		if(paracountarray[a] == ""){
			paracountarray.splice(a,1)
		}
	}
	
	console.log(paracountarray)
	//console.log(paracountarray.length)
	
	
	
	document.getElementById("output001").innerHTML = ""
	
	for(i=0;i<paracountarray.length;i++){
		var parawordarray = paracountarray[i].split(/[" "\n\.]/)
		
		//parawordarray.map(function(x){ return x.toUpperCase()});
		//console.log(i + parawordarray)
		//console.log(i + parawordarray.length)
		
		
		for(j=0;j<parawordarray.length;j++){
			
			parawordarray[j] = parawordarray[j].toUpperCase()
			//console.log(j + parawordarray)
			
			var currentcombine = parawordarray[j] + " " + parawordarray[j+1] 
			
			for(k=0;k<keywordset.length;k++){
				
				for(l=0;l<keywordset[k].word.length;l++){
					if (currentcombine == keywordset[k].word[l]){
						
						document.getElementById("output001").innerHTML += "(Para " + parseInt(i+1) + ") " + currentcombine + " : " +keywordset[k].message +"<br>"

						
					}
					else if(parawordarray[j] == keywordset[k].word[l] ){
					
						document.getElementById("output001").innerHTML += "(Para " + parseInt(i+1) + ") " + keywordset[k].word[l] + " : " +keywordset[k].message +"<br>"
					


				
			}
				
			
			
			
			}
		}
	}
	
	
	
	
	
	
}

function checkcr2(){
	
	var crinput = document.getElementById("textarea1").value
	var inputarray = crinput.split(/[" "\n\.]/);
	//console.log(inputarray)
	var paracountarray = crinput.split(/\n/gm);
	//console.log(paracountarray)
	
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
	
	
	
	
	
	
}

function counter(){
	var brnum = [document.getElementById("output001").children]
	var count = 0
	
	for(i=0;i<brnum[0].length;i++){
		if(brnum[0][i].outerHTML == '<br>'){
			count = count + 1
			
		}
	}
	document.getElementById("counter1").innerHTML = "(" + count + ")"
}









