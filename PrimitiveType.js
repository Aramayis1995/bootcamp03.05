Number("0x77") === 0x77; // 77 === 119, false
Number("077") === 077; // 77 === 63,false
Number(" 12"); // 12
isNaN(" ") + "";
0.1 + 0.2 == 0.3; //false
9007199254740992 + 1 == 9007199254740992; //true
9007199254740992 + 2 == 9007199254740992; //true
0 === +0; //true
+0 === -0; //true
1 / "2"; // 0.5
1 / 0; // Infinity
1 / -0; // -Infinity
Infinity / 6; //Infinity
Infinity / -256; //-Infinity
Infinity / Infinity; //NaN
0 / 0; //NaN
+true; // 1
+false; // 0
+null; // 0
+undefined; // 0
parseInt(".2"); //NaN
parseInt("077a"); //77
parseInt("0x77a"); //1914
parseInt("I’m the best value - said Infinity."); //NaN
parseFloat("I’m the best value - said Infinity."); // NaN
parseInt("Infinity is the best value!"); // NaN
parseFloat("Infinity is the best value!"); // Infinity
parseFloat("12.78ff"); //12.78
