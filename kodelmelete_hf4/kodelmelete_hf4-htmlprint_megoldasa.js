"use strict"

var G=[[1,0,1,1,0],[0,1,1,0,1]];
var u=[[0,0],[0,1],[1,0],[1,1]];

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
writeln("u: ");
writeln(u);
writeln("G: ");
writeln(G);

writeln(" ");
writeln("-----------------------------------");
writeln(" ");

var c = math.multiply(u,G);
writeln("c = uG = ");
writeln(c);

writeln("c (mod 2) =");
for (var i = 0; i < c.length; i++) {
	for (var j = 0; j < c[i].length; j++) {
		c[i][j] = c[i][j]%2;
	}
}
writeln(c);

writeln("B: ");
var B = [];
for (var i = 0; i < c.length-1; i++) {//egségmátrix keresése c-ben
	if ((c[i][0] == 0)&&(c[i][1] == 1)&&
		(c[i+1][0] == 1)&&(c[i+1][1] == 0))//inverz egységmátrix
	 {
	 	var tmp = [];
	 	for (var j = 2; j < c[i].length; j++) {
	 		tmp.push(c[i][j]);
	 	}
	 	B.push(tmp);

	 	tmp = [];
	 	for (var j = 2; j < c[i+1].length; j++) {
	 		tmp.push(c[i+1][j]);
	 	}
	 	B.push(tmp);
	 }

	 if ((c[i][0] == 1)&&(c[i][1] == 0)&&
		(c[i+1][0] == 0)&&(c[i+1][1] == 1))//egységmátrix
	 {
	 	var tmp = [];
	 	for (var j = 2; j < c[i].length; j++) {
	 		tmp.push(c[i][j]);
	 	}
	 	B.push(tmp);

	 	tmp = [];
	 	for (var j = 2; j < c[i+1].length; j++) {
	 		tmp.push(c[i+1][j]);
	 	}
	 	B.push(tmp);
	 }	 
}
writeln(B);


writeln("B<sup>T</sup> =");
var BT = math.transpose(B);
writeln(BT);


writeln("A ~ -1 = 1 (mod2) szerint vett B<sup>T</sup> =");
var A =[];
for (var i = 0; i < BT.length; i++) {
	var tmp = []; 
	for (var j = BT[i].length-1; j >-1  ; j--) {
		tmp.push(BT[i][j]);
	}
	A.push(tmp);
}
writeln(A);


writeln("H paritásmátrix = (A,I<sub>(n-k) x (n-k)</sub>) =");
var H = [];
//H = (math.multiply(math.transpose(B),math.identity(u.length-u[0].length)))["_data"];
for (var i = 0; i < A.length; i++) {
	H.push(A[i]);
}
var I = math.identity(3)["_data"];
for (var i = 0; i < H.length; i++) {
	for (var j = 0; j < I[i].length; j++) {
		H[i].push(I[i][j]);
	}
}
writeln(H);


writeln("c<sup>T</sup> =");
var cT = math.transpose(c);
writeln(cT);


writeln("Hc<sup>T</sup> =");
var HcT = math.multiply(H,math.transpose(c));
writeln(HcT);

writeln("Hc<sup>T</sup> (mod 2) =");
for (var i = 0; i < HcT.length; i++) {
	for (var j = 0; j < HcT[i].length; j++) {
		HcT[i][j] = HcT[i][j] %2;
	}
}
writeln(HcT);

var zero = true;
for (var i = 0; i < HcT.length; i++) {
	for (var j = 0; j < HcT[i].length; j++) {
		if (HcT[i][j] != 0) {
			zero = false;
		}
	}
}
if (zero) {
	writeln("H paritás ellenörző mátrix!");
}else{writeln("H nem paritás ellenörző mátrix!");}

/***********************/
/*function H(param) {
	var H = 0;//-1*sum(Pxi*log2(Pxi))
	for (var i = 0; i < param.length; i++) {
		H+=param[i]*Math.log2(param[i]);
	}
	H *= (-1);
	return H;
}*/
/***********************/
/*
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
*/