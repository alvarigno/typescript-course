function add(
    num1: number,
    num2:number,
    num3?: number //optional param '?'

): number{


    let total = num1 + num2;
    if(num3 != undefined){

        total += num3;

    }

    return total;

}


let awnser = add(14,23,30);
console.log("Retorna: "+ awnser);

awnser = add(20,30);
console.log('opcional : '+awnser);
