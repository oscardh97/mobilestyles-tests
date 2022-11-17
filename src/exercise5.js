/*
    4.	5.	 Write a function that processes an array of integers.   
            Print out a total count of how many integers are odd and how many integers are even.
            Print out the biggest value and the smallest value in the array.  
            Print out whether there are more even integers or odd integers in the array or if they contain the same amount of odds and even integers.
*/

const processIntegersFunction = (numbers, print = true) => {
    const totals = {
        odds: [],
        evens: [],
    };
    let max = null;
    let min = null;

    numbers.forEach(num => {
        if (max === null || num > max) {
            max = num;
        }

        if (min === null || num < min) {
            min = num;
        }

        const arrayToModify = totals[num % 2 === 0 ? "evens" : "odds"];
        
        if (arrayToModify.indexOf(num) === -1) {
            arrayToModify.push(num)
        }
    });

    if (print) {
        console.log(`Odds: ${ totals.odds.length }`);
        console.log(`Evens: ${ totals.evens.length }`);
        console.log(`Biggest Value: ${ max }`);
        console.log(`Smallest Value: ${ min }`);
        console.log(`There are ${ totals.odds.length === totals.evens.length ? " the same amount of evens and odds " : `more ${ totals.odds.length > totals.evens.length ? "odds" : "evens" }` } in the array.`);
    }

    return {
        ...totals,
        max,
        min
    };
};

export default processIntegersFunction;
