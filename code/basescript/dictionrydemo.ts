function dicDemo(){

    let myDiccionary = {a:"value",b:"value",c:"value"};

    for(var key in myDiccionary){
        console.log(key+'='+ myDiccionary[key]);
    }

}