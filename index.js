import exercise1 from "./src/exercise1.js";
import exercise2 from "./src/exercise2.js";
import exercise3 from "./src/exercise3.js";
import exercise4 from "./src/exercise4.js";
import exercise5 from "./src/exercise5.js";
import exercise6 from "./src/exercise6.js";

function printSeparatorLine() {
    console.log("--------------------------------------");
}

console.log("---------------Exercise 1--------------------------");
exercise1();
printSeparatorLine();

console.log("---------------Exercise 2--------------------------");
exercise2(35, 7);
printSeparatorLine();
exercise2(100, 30);
printSeparatorLine();
exercise2(93, 9);
printSeparatorLine();

console.log("---------------Exercise 3--------------------------");
exercise3("ABCDEF");
printSeparatorLine();

console.log("---------------Exercise 4--------------------------");
exercise4(["Yvonne" ,"Anton", "Chri",  "Clyde"]);
printSeparatorLine();
exercise4(["Beatrice", "Chri", "Clyde", "Robert", "Chloe", "Rohit"]);
printSeparatorLine();

console.log("---------------Exercise 5--------------------------");
exercise5([21, 12, 55, 24, 24, 67, 101])
printSeparatorLine();
exercise5([100])
printSeparatorLine();
exercise5([100, 23])
printSeparatorLine();

console.log("---------------Exercise 6--------------------------");
exercise6([12, 55, 24, 27, 13, 24, 1400], [24, 24, 13, 233, 102]);
printSeparatorLine();