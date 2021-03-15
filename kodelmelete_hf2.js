"use strict"

var mystring = "";
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;

for (var i = 0; i < 40; i++) {
	var chID = Math.floor(Math.random() * 5); 
	switch(chID){
		case 0: mystring += "a"; a++; break;
		case 1: mystring += "b"; b++; break;
		case 2: mystring += "c"; c++; break;
		case 3: mystring += "d"; d++; break;
		case 4: mystring += "e"; e++; break;
	}
}

console.log("karaktersorozat: " + mystring);
console.log("karakterek darabszáma: ");
console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);
console.log("d: " + d);
console.log("e: " + e);

console.log(" ");

var pa = a/(a+b+c+d+e);
var pb = b/(a+b+c+d+e);
var pc = c/(a+b+c+d+e);
var pd = d/(a+b+c+d+e);
var pe = e/(a+b+c+d+e);

console.log("Valószínűségi eloszlások");
console.log("p(a): " + pa);
console.log("p(b): " + pb);
console.log("p(c): " + pc);
console.log("p(d): " + pd);
console.log("p(e): " + pe);

console.log(" ");

console.log("Információmennyiségek: ");
console.log("I(a): " + Math.log2(1/(a/(a+b+c+d+e))));
console.log("I(b): " + Math.log2(1/(b/(a+b+c+d+e))));
console.log("I(c): " + Math.log2(1/(c/(a+b+c+d+e))));
console.log("I(d): " + Math.log2(1/(d/(a+b+c+d+e))));
console.log("I(e): " + Math.log2(1/(e/(a+b+c+d+e))));

console.log(" ");

console.log("H(x): " + (-1)*( Math.log2(1/(a/(a+b+c+d+e)))*a/(a+b+c+d+e) +  Math.log2(1/(b/(a+b+c+d+e)))*b/(a+b+c+d+e) + Math.log2(1/(c/(a+b+c+d+e)))*c/(a+b+c+d+e) + Math.log2(1/(d/(a+b+c+d+e)))* d/(a+b+c+d+e) + Math.log2(1/(e/(a+b+c+d+e)))*e/(a+b+c+d+e)) );

var encodedString = "";
for (var i = 0; i < mystring.length; i++) {
	switch(mystring[i]){
		case "a": encodedString += "0"; 	 break;
		case "b": encodedString += "10";  	 break;
		case "c": encodedString += "110";  	 break;
		case "d": encodedString += "111";  	 break;
		case "e": encodedString += "1110";   break;
	}
}

console.log("karaktersorozat nem szinguláris kódolással: " + encodedString);



/************** II. beadandó **************/


console.log(" ");
console.info("------ Shannon-Fano kódolással -----");
console.log(" ");

var probabilityArray = [pa,pb,pc,pd,pe];
probabilityArray = probabilityArray.sort();
for (var i = 0; i < probabilityArray.length; i++) {
		switch(probabilityArray[i]){
		case pa: probabilityArray[i] = ["pa", pa]; break;
		case pb: probabilityArray[i] = ["pb", pb]; break;
		case pc: probabilityArray[i] = ["pc", pc]; break;
		case pd: probabilityArray[i] = ["pd", pd]; break;
		case pe: probabilityArray[i] = ["pe", pe]; break;
	}
}


var shannonFanoEncode = ["00","01","10","110","111"];
var shannonFanoEncodeder = [];

console.log("karakter\tvalsége\t\tkódjele");
for (var i = 0; i < probabilityArray.length; i++) {
	shannonFanoEncodeder.push([probabilityArray[i], shannonFanoEncode[i]]) 
	console.log(probabilityArray[i][0].substring(1) + "\t\t" + probabilityArray[i][1] + "\t\t" + shannonFanoEncode[i]);
}

var shannonFanoEncodedString = "";
for (var i = 0; i < mystring.length; i++) {
	switch(mystring[i]){
		case probabilityArray[0][0].substring(1): shannonFanoEncodedString += shannonFanoEncodeder[0][1]; 	 break;
		case probabilityArray[1][0].substring(1): shannonFanoEncodedString += shannonFanoEncodeder[1][1];  	 break;
		case probabilityArray[2][0].substring(1): shannonFanoEncodedString += shannonFanoEncodeder[2][1];  	 break;
		case probabilityArray[3][0].substring(1): shannonFanoEncodedString += shannonFanoEncodeder[3][1];  	 break;
		case probabilityArray[4][0].substring(1): shannonFanoEncodedString += shannonFanoEncodeder[4][1];    break;
	}
}
console.log("karaktersorozat Shannon-Fano kódolással: " + shannonFanoEncodedString);

console.log(" ");
console.info("------ Gilbert-Moore kódolással -----");
console.log(" ");

var gilbertMooreEncodedString = "";
for (var i = 0; i < mystring.length; i++) {
	switch(mystring[i]){
		case "a": gilbertMooreEncodedString += "000"; 	 break;
		case "b": gilbertMooreEncodedString += "001";  	 break;
		case "c": gilbertMooreEncodedString += "10";  	 break;
		case "d": gilbertMooreEncodedString += "110";  	 break;
		case "e": gilbertMooreEncodedString += "111";    break;
	}
}

console.log("karaktersorozat Gilbert-Moore kódolással: " + gilbertMooreEncodedString);