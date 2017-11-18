//html ID
document.getElementById("textarea1").addEventListener("keyup", checkcr);
document.getElementById("textarea1").addEventListener("keyup", counter);
var output = document.getElementById("output001")

//Arrays
var crinput = []
var paracountarray = []
var parawordarray = []
var keywordlist = []


//Other Declare
var rownum = 0

//Keywords Objects
var keywordset = [
	{word:["PO","pending order","Submit PO", "delete PO"],message:["Do you need to post registry?"]},
	{word:["delete"],message:["Do you want to delete in system?"]},
	{word:["contact"],message:["Inter-related feature: Contact Management, Domain Management, Bulk Modify Contact"]}
]

//Convert Keyword to UpperCase
ObjectArrayUpperCase(keywordset,'word')
//console.log(keywordset)



//Keyword Listing

function keywordlisting(){
	
	for(i=0;i<keywordset.length;i++){
		for(j=0;j<keywordset[i].word.length;j++){
			keywordlist.push( " " + keywordset[i].word[j])
		}
		
	}	
}


keywordlisting()
checkcr()
document.getElementById("keywordlist").innerHTML = keywordlist

//Paragraph Splitter
function ParaSplitter(){
	paracountarray = crinput.split(/[\n\r]+/gm);
	
	for(a=0;a<paracountarray.length;a++){
		if(paracountarray[a] == ""){
			paracountarray.splice(a,1)
		}
	}
}

//Word Splitter
function WordSplitter(wordnum){
	parawordarray = paracountarray[wordnum].split(/[\s\n\.,]/)
	
	StringArrayUpperCase(parawordarray)
	//console.log(paracountarray)
	
}

//UpperCase Converter(Array of Strings)
function StringArrayUpperCase(arrayname){
	for(d=0;d<arrayname.length;d++){
			arrayname[d] = arrayname[d].toUpperCase()
		}
}

//UpperCase Converter(Array of Objects)
function ObjectArrayUpperCase(arrayname,array){
	//console.log(arrayname[0])
	//console.log(array)
	for(b=0;b<arrayname.length;b++){
		for(c=0;c<arrayname[b][array].length;c++){
			arrayname[b][array][c] = arrayname[b][array][c].toUpperCase()
		}
	}
}


function checkcr(){
	rownum = 0
	
	crinput = document.getElementById("textarea1").value

	ParaSplitter()
	
	console.log(paracountarray[0])

	output.innerHTML = '<tr><th style="border-bottom:1px solid grey;text-align:center;" colspan="3"><h2>Result <span id="counter1" style="color:red;font-size:85%"></span></h2></th><tr  style="text-align:center;font-weight:bold;"><td class="paratd">Para</td><td class="keywordtd">Keyword</td><td >Message</td></tr>'
	
	for(i=0;i<paracountarray.length;i++){
		 
		WordSplitter(i)
		console.log(parawordarray)
		
		for(j=0;j<parawordarray.length;j++){
			
			for(k=0;k<keywordset.length;k++){

				for(l=0;l<keywordset[k].word.length;l++){
					var currentcombine = parawordarray[j] + " " + parawordarray[j+1] 
					
					//console.log(currentcombine)
					
					var newtr = document.createElement("tr")
					var newtd1 = document.createElement("td")
					var newtd2 = document.createElement("td")
					var newtd3 = document.createElement("td")

					if (currentcombine == keywordset[k].word[l]){
						rownum = rownum + 1
						
						var combine = "combine"
						newtr.appendChild(newtd1)
						newtr.setAttribute("id","result"+rownum)
						newtr.setAttribute("onmouseenter","checkHighlight( "+rownum+",'Combine',"+i+" , "+j+")")
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
						rownum = rownum + 1
						
						newtr.appendChild(newtd1)
						newtr.appendChild(newtd1)
						newtr.setAttribute("id","result"+rownum)
						newtr.setAttribute("onmouseenter","checkHighlight( "+rownum+",'Single',"+i+" , "+j+")")
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
	counter()
	
}


	
	
	
	
	


function counter(){
	var brnum = document.getElementById("output001").children 
	var count = -2
	//console.log(brnum)
	
	for(i=0;i<brnum.length;i++){
		
			count = count + 1
			
		
	}
	document.getElementById("counter1").innerHTML = "(" + count + ")"
}


//Highlight text scripts

var $container = $('.container');
var $backdrop = $('.backdrop');
var $highlights = $('.highlights');
var $textarea = $('#textarea1');
var $toggle = $('button');

// yeah, browser sniffing sucks, but there are browser-specific quirks to handle that are not a matter of feature detection
var ua = window.navigator.userAgent.toLowerCase();
var isIE = !!ua.match(/msie|trident\/7|edge/);
var isWinPhone = ua.indexOf('windows phone') !== -1;
var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);


var ua = window.navigator.userAgent.toLowerCase();
var isIE = !!ua.match(/msie|trident\/7|edge/);
var isWinPhone = ua.indexOf('windows phone') !== -1;
var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);

function applyHighlights(text) {
  text = text
    .replace(/\n$/g, '\n\n')
    .replace(/[A-Z].*?\b/g, '<mark>$&</mark>');
  
  if (isIE) {
    // IE wraps whitespace differently in a div vs textarea, this fixes it
    text = text.replace(/ /g, ' <wbr>');
  }
  
  return text;
}



function handleInput() {
  var text = $textarea.val();
  var highlightedText = applyHighlights(text);
  $highlights.html(highlightedText);
}


//New Version
function checkHighlight(row,wordtype,para,wordnum){
	var text = $textarea.val();
	console.log(row,wordtype,para,wordnum)
	var highlightedText = HighlightText(text,row,wordtype,para,wordnum);
	$highlights.html(highlightedText)
	
}

function HighlightText(text,row,wordtype,para,wordnum){
	ParaSplitter()
	WordSplitter(para)
	
	//<---bug--->
	text = parawordarray.replace(parawordarray[wordnum],"<mark>"+parawordarray[wordnum]+"</mark>")
	console.log(text)
	
}


function handleScroll() {
  var scrollTop = $textarea.scrollTop();
  $backdrop.scrollTop(scrollTop);
  
  var scrollLeft = $textarea.scrollLeft();
  $backdrop.scrollLeft(scrollLeft);  
}


function fixIOS() {
  // iOS adds 3px of (unremovable) padding to the left and right of a textarea, so adjust highlights div to match
  $highlights.css({
    'padding-left': '+=3px',
    'padding-right': '+=3px'
  });
}

function bindEvents() {
  $textarea.on({
    'input': handleInput,
    'scroll': handleScroll
  });

  $toggle.on('click', function() {
    $container.toggleClass('perspective');
  });  
}

if (isIOS) {
  fixIOS();
}

bindEvents();
//handleInput();



console.log(paracountarray)


















































