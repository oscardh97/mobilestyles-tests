/*
    1.	 Write FizzBuzz for numbers 1 to 100.

    Print ‘Fizz’ for numbers divisible by three.
    Print ‘Buzz’ for numbers divisible by five.
    Just print the number if it’s not divisible by either.
*/

export default () => {
    const START = 1;
    const END = 100;

    for (let i = START; i < END; i++) {
        const divisibleByThree = i % 3 === 0;
        const divisibleByFive = i % 5 === 0;

        if (divisibleByThree) {
            console.log("Fizz");
        }
        if (divisibleByFive) {
            console.log("Buzz");
        }

        if (!divisibleByThree && !divisibleByFive) {
            console.log(i);
        }
    }
};
