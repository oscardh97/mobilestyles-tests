/*
    3.	Write a recursive function that prints a string and shortens it by one character each time.
    When the string is empty, print DONE.
*/

const shortenFunction = (word) => {
    if (word.length === 0) {
        console.log("DONE");
        return;
    }

    console.log(word);
    return shortenFunction(word.slice(0, word.length - 1));
};

export default shortenFunction;
