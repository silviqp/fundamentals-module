function solve (num){
    let n = Number (num);
    let chars = 'abcdefghijklmnopqrstuvwxyz';

    for (let a =0; a<n; a++){
        for(let b = 0; b<n;b++){
            for (let c = 0;c<n;c++){
                console.log(chars[a]+chars[b]+chars[c]);
            } 
        }
    }
}
solve (3)