function addit(
    num1: number,
    num2: number,
    num3: number = 0 
    ): number {

        let total = num1 + num2 + num3;

        return total;
}

let anwser = addit(1,2,3);
console.log("respuesta: " + anwser);

anwser = addit(1,2);
console.log("respuesta: " + anwser);

