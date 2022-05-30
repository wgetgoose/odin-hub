const findTheOldest = function(people) {
    people.sort((a,b) => {
        let aBirth = a.yearOfBirth;
        let aDeath = a.yearOfDeath;
        let bBirth = b.yearOfBirth;
        let bDeath = b.yearOfDeath;
        let aAge = (aDeath - aBirth);
        let bAge = (bDeath - bBirth);
        return aAge > bAge ? -1 : 1;
    })
    return people[0];
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

// Do not edit below this line
module.exports = findTheOldest;
