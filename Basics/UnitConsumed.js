function unitsConsumed(n) {
    //write code here
    
    let bill = n-80;
    
    if(bill>0 && bill<=150){
        console.log((bill/3));
    }
    else if(bill>151 && bill <=650){
        console.log((50+(bill-150)/5))
    }
    else{
        console.log(150+(bill-650)/10)
    }
}
