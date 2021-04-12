document.querySelector("#button_fild").addEventListener("click",function (){

    var num = document.querySelector("#textFild").value;

    try{
         if(num < 5){
            throw "number is too low"
         }else if(num > 10){
             throw "number is very heigh"
         }       

    }catch(err){
        document.write(err)
    }
})