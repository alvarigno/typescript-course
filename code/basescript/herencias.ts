class persona1 {

    constructor(

        public fisrtName: string,
        public lastName: string,
        public email: string,
        private age: number

    ){

    }
    greetMe(){
        console.log("Hola: "+ this.fisrtName);
    }

}


class estudiante extends persona1 {

    constructor(
        fisrtName: string,
        lastName: string,
        email: string,
        age: number,
        private grado: string
    ){

        super(fisrtName, lastName, email, age);

    }

    greetMe(){
        super.greetMe();
        console.log(`el grado es: "${this.grado}"`);
    }


}


let student = new estudiante('Alvaro', 'Emparán', 'a@q.com', 43,'6th');

student.greetMe();

