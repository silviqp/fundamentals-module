function extractFiles(text){
let fileInfo = text.split('\\').pop();

let lastDotInd = fileInfo.lastIndexOf('.');
let fileName = fileInfo.slice(0,lastDotInd);
let fileExt = fileInfo.slice(lastDotInd+1);

console.log(`File name: ${fileName}`);
console.log(`File extension: ${fileExt}`);


}
extractFiles('C:\\Internal\\training-internal\\Template.pptx')