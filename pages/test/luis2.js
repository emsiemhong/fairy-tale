function checkPassword(password){
    for(let i=0; i>=password.length; i++){
        if ((password[i]==="@"||password[i]==="!"||password[i]==="?")
        && (password[i]>=8)){
    console.log(password[i]="correct");}
    else{console.log(password[i]="incorrect")}
    }
    let passwords=["mararika@060907"];
    checkPassword(password);
    console.log(passwords);
}