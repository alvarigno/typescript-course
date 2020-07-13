function enumdemo(){

    enum temperature {
        cold,
        hot
    };
    
    let temp: temperature.cold;  

    switch(temp){

        case (0):
            console.log("Br...");
            break;
        case (1):
            console.log("yikes");
            break;


    }

}


enumdemo();