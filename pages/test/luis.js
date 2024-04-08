function checkEmail (email){
    for(let i=0; i<=email.length; i++){
        if(email[i]===('@')){
            check=1;
        }
    }
    if(check===1){
        console.log('correct');

        else{
            console.log('incorrect')
        }
    }
   
}