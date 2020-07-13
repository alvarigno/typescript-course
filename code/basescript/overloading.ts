function person(name:string):string;
function person(age:number):string;
function person(isMerried:boolean):string;
function person(val:(string | number | boolean)):string{


    switch(typeof val) {

        case "string":
            return 'my name is: '+ val;
        case "number":
            return 'my age is: '+ val;
        case "boolean":
            return val ? 'Im married: ': 'im not married';

    }

};

console.log(person('Rober'));
console.log(person(21));
console.log(person(true));
