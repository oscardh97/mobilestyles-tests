/*
    6. Write a function similar to Question #5.  You are given two integer arrays.  Print out any values that are found in both arrays.  
        Print the largest number in each array.
        Print the largest number from both arrays.
        BONUS: DO NOT PRINT MULTIPLE MATCHING DUPLICATES.  

*/

import processIntegersFunction from "./exercise5.js";

const processTwoArrays = (array1, array2) => {
    const max1 = processIntegersFunction(array1, false).max;
    const max2 = processIntegersFunction(array2, false).max;

    let matches = [];
    let largestArray = array1.length > array2.length ? array1 : array2;
    let shortesArray = array1.length <= array2.length ? array1 : array2;

    largestArray.forEach(num => {
        if (shortesArray.indexOf(num) !== -1 && matches.indexOf(num) === -1) {
            matches.push(num);
        }
    });

    console.log(`Matching Values: [${ matches }]`);
    console.log(`Largest value of arrayOne: ${ max1 }`);
    console.log(`Largest value of arrayTwo: ${ max2 }`);
    console.log(`Largest value of either array: ${ max1 > max2 ? max1 : max2 }`);

    return {
        matches,
        max1,
        max2
    };
};

export default processTwoArrays;
