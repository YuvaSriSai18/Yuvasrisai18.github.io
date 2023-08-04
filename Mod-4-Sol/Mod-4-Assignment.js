var names=new Array();
names[0]="Yuva";
names[1]="John";
names[2]="Jenny";
names[3]="jack";
names[4]="pranav";
names[5]="fabio";
names[6]="laura";
names[7]="paula";
names[8]="lappy";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}