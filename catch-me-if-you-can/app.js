try {
    function sum(x, y){
        if(typeof(sum) === 1){
           console.log("the same")
        }  else {
            throw "not the same"
        }
        return x + y
    }
    sum(9, 8)
}
catch(err){
    console.log(err)
}