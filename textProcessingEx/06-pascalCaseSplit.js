function pascalCaseSplit(str){
    
    console.log(str.split(/(?=[A-Z])/).join(", "))
}


pascalCaseSplit('SplitMeIfYouCanHaHaYouCantOrYouCan')