var multy = function(
    num1: number,
    num2: number
):number {


    return num1 + num2;

}


var multilambda = (num1: number, num2: number) => num1 * num2;


var sayfirstnumber: (firstnumber: number) => void;

sayfirstnumber = function(fisrt: number){

    console.log(fisrt);
}


console.log(multy(5,7));

console.log(multilambda(5,7));

sayfirstnumber(35);

