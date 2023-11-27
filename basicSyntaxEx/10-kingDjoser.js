function piramyd (base,increment){
let stone = 0
let marble = 0;
let lapis = 0;
let gold = 0 ;
let hight = 0;
let floor = 1


for (let step = base; step>0; step-=2){
      hight+=increment;
      let totalArea = step**2;
      if (step<=2){
        gold=totalArea*increment;

      }else {
        let stoneArea = (step-2)**2;
        stone += stoneArea*increment
        if (floor%5==0){
            let lapisArea = totalArea-stoneArea;
            lapis += lapisArea*increment;
        
        }else {
            let marbleArea = totalArea-stoneArea;
            marble+=marbleArea*increment
        }
      }
floor++
}
console.log(`Stone required: ${Math.ceil(stone)} `);
console.log(`Marble required: ${Math.ceil(marble)}`); 
console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
console.log(`Gold required: ${Math.ceil(gold)}`); 
console.log(`Final pyramid height: ${Math.floor(hight)}`); 

}
piramyd(23, 0.5)