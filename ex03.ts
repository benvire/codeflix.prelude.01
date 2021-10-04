let cdc:string = "teste"

function Length(str = ""){
    let result:number = 0


    for(let i = 0; true; i++){
        if(str[i] == undefined){
            return i
        }
    }
}

console.log(Length(cdc));

