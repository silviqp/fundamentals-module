function towns(arr) {
    // inerating through the array

    for (let town of arr) {

        // split to take every element of the string 
        // using destructuring array

        let [townName, latitude, longitude] = town.split(' | ');

        // parcing latitude and longitude to Nums and fixing(2);

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        // making Object 

        let townObject = { town: townName, latitude: latitude, longitude: longitude };

        //print the object
        console.log(townObject);
    }


}
towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])