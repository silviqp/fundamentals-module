function aMinerTask (arr){
// making an empty object
    let resources = {}

    //making for loop to iterate through the elements of the array, but the step will be 2 because of the input

    for (let i =0; i < arr.length; i +=2){
        // at index 0 we have resource at the 1 index the quantity
        let resource = arr[i];
        let qty = Number (arr[i+1])

        //checking if the current resource exists in the object. if exists adding qty if dont adding to the object new item
        if (resource in resources){
            resources[resource] += qty;
        }else {
            resources[resource]=qty
        }
    }
    console.log(resources);
// as we can not iterate through an object we are taking the entries so we can iterate 
let entries = Object.entries(resources)
// iterating the entries 
for (let [resource,qty] of entries){
    console.log(`${resource} -> ${qty}`);
}
}
aMinerTask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])