var crinput = document.getElementById("textarea1").value
document.getElementById("textarea1").addEventListener("keyup", checkcr);
document.getElementById("textarea1").addEventListener("keyup", counter);
//document.getElementById("output001").innerHTML = crinput

var keyword = ["PO","pending order", "delete"]
var output = document.getElementById("output001")

var keywordset = [
	{word:["PO","pending order","Submit PO", "delete PO"],message:["Do you need to post registry?"]},
	{word:["delete"],message:["Do you want to delete in system?"]},
	{word:["contact"],message:["Inter-related feature: Contact Management, Domain Management, Bulk Modify Contact"]}
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
//checkcr()

document.getElementById("keywordlist").innerHTML = keywordlist

function checkcr(){
	
	var crinput = document.getElementById("textarea1").value
	//var inputarray = crinput.split(/[" "\n\.]/);
	//console.log(inputarray)
	var paracountarray = crinput.split(/[\n\r]+/gm);
	
	for(a=0;a<paracountarray.length;a++){
		if(paracountarray[a] == ""){
			paracountarray.splice(a,1)
		}
	}
	
	console.log(paracountarray)
	//console.log(paracountarray.length)
	
	/*
	for(e=2;e<output.childNodes.length+1;e++){
	output.childNodes[e].innerHTML = ""
	}
	*/
	
	output.innerHTML = '<tr><th style="border-bottom:1px solid grey;text-align:center;" colspan="3"><h2>Result <span id="counter1" style="color:red;font-size:85%"></span></h2></th><tr  style="text-align:center;font-weight:bold;"><td class="paratd">Para</td><td class="keywordtd">Keyword</td><td >Message</td></tr>'
	
	for(i=0;i<paracountarray.length;i++){
		var parawordarray = paracountarray[i].split(/[" "\n\.]/)
		
		//parawordarray.map(function(x){ return x.toUpperCase()});
		//console.log(i + parawordarray)
		//console.log(i + parawordarray.length)
		//console.log("checking para, " + i + "st para")
		
		for(d=0;d<parawordarray.length;d++){
			parawordarray[d] = parawordarray[d].toUpperCase()
		}
		
		for(j=0;j<parawordarray.length;j++){
			
			//console.log("checking words in para, words " + j )
			//console.log(j + parawordarray)
			
			
			for(k=0;k<keywordset.length;k++){
				//console.log("checking keyword set, set " + k)
				
				for(l=0;l<keywordset[k].word.length;l++){
					var currentcombine = parawordarray[j] + " " + parawordarray[j+1] 
					
					var newtr = document.createElement("tr")
					var newtd1 = document.createElement("td")
					var newtd2 = document.createElement("td")
					var newtd3 = document.createElement("td")
					//console.log(currentcombine)
					if (currentcombine == keywordset[k].word[l]){
						newtr.appendChild(newtd1)
						newtd1.innerHTML = parseInt(i+1)
						newtd1.setAttribute("class","paratd")
						newtr.appendChild(newtd2)
						newtd2.innerHTML = currentcombine
						newtd2.setAttribute("class","keywordtd")
						newtr.appendChild(newtd3)
						newtd3.innerHTML = keywordset[k].message
						output.appendChild(newtr)
							
					}
					else if(parawordarray[j] == keywordset[k].word[l] ){
						newtr.appendChild(newtd1)
						newtd1.innerHTML = parseInt(i+1)
						newtd1.setAttribute("class","paratd")
						newtr.appendChild(newtd2)
						newtd2.innerHTML = keywordset[k].word[l]
						newtd2.setAttribute("class","keywordtd")
						newtr.appendChild(newtd3)
						newtd3.innerHTML = keywordset[k].message
						output.appendChild(newtr)
						
					}
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









