interface phone {

    model: string;
    version: number;
    ring(): string;

}

class tradicional {

    constructor(
        public model: string,
        public version: number
    ){}

    ring() {return "ring ring";}

}

class moder {

    constructor(
        public model: string,
        public version: number
    ){}

    ring() {return "ring bell";}

}


let bellphone = new tradicional("xpiria",3.4);
let iphone = new moder("11X",1.4);


var phone: phone[] = [];

phone.push(bellphone);
phone.push(iphone);

for(var ph of phone){

    console.log(ph.ring());

}





