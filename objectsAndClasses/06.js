function songs (arr){

class Songs {
    constructor(type,name,time){
        this.type = type;
        this.name = name;
        this.time = time;
    }
}
let songs = [];
let numOfSongs = arr.shift();
let songType = arr.pop();

for (let i =0; i<numOfSongs; i ++){

let [type,name,time]= arr[i].split('_')
let song = new Songs(type,name,time);
songs.push(song)

}
if (songType == 'all'){
songs.forEach((i)=>console.log(i.name))
}else {
let filtered = songs.filter((i)=>i.type === songType);
filtered.forEach((i)=>console.log(i.name))
}
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])