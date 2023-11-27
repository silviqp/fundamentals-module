// MAIN FUNCTION OR THE SKIN 
function printCertificate(grade, arr) {
    //CALLING 1
    printHeader();
    //CALLING 2
    console.log(`${readName(arr[0], arr[1])}`);
    //CALLING 3
    formatGrade(grade)
//NESTED FUNCTION 1
    function printHeader() {
        console.log('~~~- {@} -~~~');
        console.log('~- Certificate -~');
        console.log('~~~- ~---~ -~~~');
    }
//NESTED FUNCTION 2 
    function readName(first, last) {
        return first + ' ' + last
    }
// NESTED FUNCTION 3
    function formatGrade(grade) {
        if (grade < 3) {
            console.log(`Fail (${Math.floor(grade)})`);
        } else if (grade >= 3 && grade < 3.5) {
            console.log(`Poor (${grade.toFixed(2)})`)
        } else if (grade >= 3.5 && grade < 4.5) {
            console.log(`Good (${grade.toFixed(2)})`)
        } else if (grade >= 4.5 && grade < 5.5) {
            console.log(`Very good (${grade.toFixed(2)})`)
        } else {
            console.log(`Excellent (${grade.toFixed(2)})`)
        }

    }
}
printCertificate(2.25, ['Peter', 'Stuard'])