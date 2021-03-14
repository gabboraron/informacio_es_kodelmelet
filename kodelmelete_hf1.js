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

console.log("Valószínűségi eloszlások");
console.log("p(a): " + a/(a+b+c+d+e));
console.log("p(b): " + b/(a+b+c+d+e));
console.log("p(c): " + c/(a+b+c+d+e));
console.log("p(d): " + d/(a+b+c+d+e));
console.log("p(e): " + e/(a+b+c+d+e));

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

console.log("encoded: " + encodedString);

