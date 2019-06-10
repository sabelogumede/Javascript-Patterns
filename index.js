//     //function - as first class citizens
// const calc = () => {
//     return 4 * 3;
// }

// let aNumber = calc();

//     //parsing a function 'aNumber' as a variable to console log
// console.log(aNumber);



//-------------------------------



//Callback function
const calc = () => {
    return 4 * 4;
}

//parsing our function as a callback into printCalc function
const printCalc = (callback) => {
    //execute the callback function
    console.log(callback());
}

printCalc(calc);