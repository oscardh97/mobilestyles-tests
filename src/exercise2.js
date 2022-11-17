/*
    2.	Write a function that divides two positive numbers without using the division or multiplication operator.
    Built-in math libraries are also not allowed. This solution does not need a bit-shift operation.
    The function should return the nearest whole number.  We will not consider the remainder. 
*/

const divide = (n1, n2) => {
    if (!n1 || !n2) {
        console.error("Parameters are missing");
        return;
    }

    let dividend = n1;
    let cont = 0;

    while (dividend >= n2) {
        dividend -= n2;
        cont++;
    }

    console.log(cont);

    return cont;
};

export default divide;
