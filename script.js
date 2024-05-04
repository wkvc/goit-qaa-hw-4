// Podwajanie numerow
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}

// Przykładowe użycie funkcji
const inputArray = [1, 2, 3, 4, 5];
const doubledArray = doubleNumbers(inputArray);

console.log("Oryginalna tablica:", inputArray);
console.log("Podwojona tablica:", doubledArray);


// Przykładowa tablica studentów
const students = [
    { name: "Stan", score: 83 },
    { name: "John", score: 59 },
    { name: "Molly", score: 37 },
    { name: "Jennie", score: 94 },
    { name: "Fred", score: 64 },
  ];

// Imiona studentów
const names = students.map(student => student.name);
console.log(names);
