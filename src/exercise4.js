/*
    4.	Write a function that will iterate through a String array of names and will print how many names start with the letters found at the beginning of each name.
*/

const getIncidencesStarts = (names) => {
    const incidencesByLetter = {};

    names.forEach(name => {
        const firstLetter = name.charAt(0).toUpperCase();
        incidencesByLetter[firstLetter] = incidencesByLetter[firstLetter] ? incidencesByLetter[firstLetter] + 1 : 1;
    });
    console.log(incidencesByLetter)

    return incidencesByLetter;
};

export default getIncidencesStarts;
