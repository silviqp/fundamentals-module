function echotype (parameter){
    let type = typeof parameter
    console.log(typeof parameter);

if (type == 'string' || type== 'number'){
    console.log(parameter);
}else {
    console.log('Parameter is not suitable for printing');
}
}
echotype(null)