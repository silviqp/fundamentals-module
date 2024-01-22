function townsInfo (arr){

    for (let town of arr){

        let[name,longitude,latitude] = town.split(' | ')

        longitude= Number(longitude).toFixed(2);
        latitude = Number(latitude).toFixed(2);

        let obj = {name:name,latitude:latitude,longitude:longitude};
        console.log(obj);
    }



}
townsInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])