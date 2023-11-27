function cone (r, h){
let volume = 1/3* Math.PI*r*r*h
let s = Math.sqrt(r*r+h*h);
let l = Math.PI*r*s;
let b = Math.PI *r*r

let area = l+b;

console.log(`volume = ${volume.toFixed(4)}`);

console.log(`area = ${area.toFixed(4)}`);
}
cone (3,
    5)