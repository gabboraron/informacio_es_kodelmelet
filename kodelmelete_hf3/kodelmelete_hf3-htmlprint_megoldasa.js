"use strict"

var Px=[0.3,0.3,0.4];
var PyIx=[[0.5,0.5,0],[0.3,0.4,0.3],[0,0.5,0.5]];

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

writeln("Bemeneti adatok:");
writeln("P(x): "+Px);
writeln("P(y|x): ");
writeln(PyIx);

writeln(" ");
writeln("-----------------------------------");
writeln(" ");

var Py=[];//Px*PyIx
for (var i = 0; i < Px.length; i++) {
	var tmp = 0;
	for (var j = 0; j < PyIx.length; j++) {
		tmp += Px[i]*PyIx[j][i];
	}
	Py.push(tmp);
}
writeln("P(y): " + Py);


/***********************/
function H(param) {
	var H = 0;//-1*sum(Pxi*log2(Pxi))
	for (var i = 0; i < param.length; i++) {
		H+=param[i]*Math.log2(param[i]);
	}
	H *= (-1);
	return H;
}
/***********************/

writeln("H(x): "+H(Px));
writeln("H(y): "+H(Py));


writeln("P(x,y) számolása... ");//I*P(x)*P(y|x)
var IPx=[];
for (var i = 0; i < Px.length; i++) {
	var tmp = [];
	for (var j = 0; j < i; j++) {
		tmp.push(0);
	}
	tmp.push(Px[i]);
	for (var j = tmp.length; j < Px.length; j++) {
		tmp.push(0);
	}
	IPx.push(tmp);
}

writeln("I*P(x): ");
writeln(IPx);

var Pxy = [];

/**var tmpPxi = 0;
for (var i = 0; i < IPx.length; i++) {
	var tmp = 0;
	var rowdone = 0;
	while(rowdone < IPx[i].length){
		for (var j = 0; j < IPx[i].length; j++) {
		
			tmp += IPx[i][j]*PyIx[tmpPxi][j];
		}
		tmpPxi++;
		rowdone++;
	}
	tmpPxi = 0;
	Pxy.push(tmp);
	writeln(tmp);
}*/

Pxy = math.multiply(IPx, PyIx);

writeln("P(x,y): ");
writeln(Pxy);

var Hxy = 0;//-sum(P(xi,yj)log(P(xi,yj))
for (var i = 0; i < Pxy.length; i++) {
 	for (var j = 0; j < Pxy[i].length; j++) {
 	 	if(Pxy[i][j]!=0)
 	 		Hxy+=Pxy[i][j]*(Math.log2(Pxy[i][j]));
 	 }
}
Hxy *= (-1);
writeln("H(x,y): "+Hxy);

var HyIx = 0;//-sum(P(xi,yj)*log(P(yj|xi)))
for (var i = 0; i < Pxy.length; i++) {
 	for (var j = 0; j < Pxy[i].length; j++) {
 		if ((Pxy[i][j]!=0)&&(PyIx[j][i]!=0))
 	 		HyIx+=Pxy[i][j]*(Math.log2(PyIx[j][i]));
 	 }
}
HyIx *= (-1);
writeln("H(y|x): "+HyIx);
var Hxy2 = H(Px)+HyIx;
writeln("H(x,y)=H(x)+H(y|x)= "+Hxy2);

var Ixy = H(Py)+H(Px)-Hxy;
writeln("I(x,y) = H(y)+H(x)-H(y,x)= "+Ixy);
