"use strict"

function writeln(a) {
	document.write("<p>");
	if (typeof a == "object") {
		document.write('<table style="width:10%">');
		for (var i = 0; i < a.length; i++) {
			document.write("<tr>");
			for (var j = 0; j < a[i].length; j++) {
				document.write("<td>"+a[i][j]+"</td>");
			}
			document.write("</tr>");
			//document.write(a[i]);
			//document.write("<br>");
		}		
		document.write("</table>");
	}else{
		document.write(a);
	}
	document.write("</p>");
//	document.write("<br>");
}


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

writeln("karaktersorozat: " + mystring);
writeln("karakterek darabszáma: ");
writeln("a: " + a);
writeln("b: " + b);
writeln("c: " + c);
writeln("d: " + d);
writeln("e: " + e);
var sum = e+b+c+d+e;
writeln("össz: " + sum);

writeln(" ");
writeln("<hr>");


// LZW-compress a string
//https://gist.github.com/revolunet/843889
function lzw_encode(s) {
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i++) {
        currChar=data[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            dict[phrase + currChar] = code;
            code++;
            phrase=currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    
    return out.join("");
}

writeln("LZW kóddal: ");
var lzwString = lzw_encode(mystring);
writeln(lzwString);
writeln("karakterek darabszáma: "+ lzwString.length);
writeln(" ");



writeln("<hr>");

function rle_encode(string) {
	var out = "";
	var before = string[0];
	var counter = 1;
	for (var i = 1; i < string.length; i++) {
		if (string[i] == before) {
			counter++;
		}
		else{
			out += counter + before;
			counter = 1;
			before = string[i];
		}
	}
	return out;
}


writeln("RLE kóddal: ");
var rleString = rle_encode(mystring);
writeln(rleString);
writeln("karakterek darabszáma: " + rleString.length);
writeln("egységek darabszáma: " + rleString.length/2);
writeln("");
