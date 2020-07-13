class persona {

    public fisrtName: string;
    public lastName: string;
    public email: string;
    private age: number;


    constructor(

        fn:string,
        ln:string,
        email:string,
        age:number

    ){
        this.fisrtName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;

    }

    greetMe(){

        console.log("Hola: "+ this.fisrtName);


    }

}

let p = new persona('Alvaro', 'emparan','a@a.com', 43);
p.greetMe();





