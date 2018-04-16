// Een lege array creëren
let leeg1 = new Array();
let leeg2 = [];

// Initiële elementen opgeven
let fruit = ['apple', 'pear', 'lemon'];

// Individuele elementen gebruiken
console.log(fruit[1]); // pear

// Een element vervangen
fruit[2] = 'kiwi';

// Een nieuw element toevoegen
fruit[3] = 'grape';

// Het aantal elementen weergeven
console.log(fruit.length); // 4

// De ganse array tonen
console.log(fruit); // ["apple", "pear", "kiwi", "grape"]

// Een array kan elementen van verschillende types bijhouden
let arr = [
  'apple',
  { firstname: 'Jan', lastname: 'Janssens' },
  true,
  function() {
    console.log(`Hello!`);
  }
];

// de firstname laten zien van het element op positie 1
console.log(arr[1].firstname); // Jan

// de functie gebruiken op positie 3
arr[3](); // Hello!

// pop verwijdert het laatste element en retourneert het
console.log(fruit.pop()); // grape

// push voegt een nieuw element achteraan toe
fruit.push('melon');
console.log(fruit); // ["apple", "pear", "kiwi", "melon"]

// shift verwijdert het eerste element en retourneert het
console.log(fruit.shift()); // apple

// met unshift kan je een element vooraan de array toevoegen
fruit.unshift('orange');
console.log(fruit); // ["orange", "pear", "kiwi", "melon"]
/*
Oefening
*/
// Creëer een array stijlen met de items "jazz" en "blues"
// Voeg achteraan "rock-n-roll" toe
// Verwijder de waarde in het midden door "klassiek". Je code moet werken voor alle arrays met een oneven aantal elementen
// Verwijder het eerste element en toon het
// Voeg vooraan "rap" en "reggae" toe

/*
Lussen
*/
// De klassieke manier
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// Nog een manier met behulp van forEach
fruit.forEach(function(element) {
  console.log(element);
});
// orange
// pear
// kiwi
// melon

// Hetzelfde maar korter met behulp van arrow functies
fruit.forEach(element => console.log(element));

// Idem. Als er maar één parameter is moeten er geen ronde haakjes staan rond de parameter
fruit.forEach(element => console.log(element));

// De meest algemene vorm van forEach
fruit.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
// orange is at index 0 in orange,pear,kiwi,melon
// pear is at index 1 in orange,pear,kiwi,melon
// kiwi is at index 2 in orange,pear,kiwi,melon
// melon is at index 3 in orange,pear,kiwi,melon

// Nieuws sinds ES6
for (const f of fruit) {
  console.log(f);
}
// orange
// pear
// kiwi
// melon

// Elementen verwijderen
// Verwijder het element op positie 1
delete fruit[1];
console.log(fruit); // ["orange", empty, "kiwi", "melon"]

// De functie splice
// Verwijder 2 elementen vertrekkend van positie 1 en voeg "pineapple", "strawberry", "blueberry" in
// De verwijderde elementen worden geretourneerd
console.log(fruit.splice(1, 2, 'pineapple', 'strawberry', 'blueberry')); // [empty, "kiwi"]
console.log(fruit); // ["orange", "pineapple", "strawberry", "blueberry", "melon"]

// De functie slice retourneert een nieuwe array waarbij alle items gekopieerd worden
// vanaf de startindex tot (niet tot en met) de eindindex
console.log(fruit.slice(2, 5)); // ["strawberry", "blueberry", "melon"]

// Zoeken in een array
// De functie indexOf(item, from) zoekt naar item startend van positie from (default waarde 0)
// en retourneert de index waar het gezochte item gevonden werd. Anders wordt er -1 geretourneerd
console.log(fruit.indexOf('blueberry')); // 3
console.log(fruit.indexOf('orange')); // -1

// De functie lastIndexOf(item, from) doet hetzelfde maar zoekt van rechts naar links
console.log(fruit.lastIndexOf('blueberry')); // 3
console.log(fruit.lastIndexOf('orange')); // -1

// De functie includes(item, from) zoekt naar item startend van positie from
// en retourneert true wanneer het gezochte item werd gevonden
console.log(fruit.includes('blueberry')); // true
console.log(fruit.includes('blueberry', 4)); // false
console.log(fruit.includes('orange')); // false

// Stel dat we een array van objecten hebben. Hoe kunnen we een object terugvinden
// dat aan een specifieke voorwaarde voldoet
const users = [
  { id: 1, firstname: 'Jan', lastname: 'Janssens' },
  { id: 2, firstname: 'Eva', lastname: 'De Smet' },
  { id: 3, firstname: 'Pieter', lastname: 'Martens' }
];

const user = users.find(item => item.id === 1);
console.log(user); // {id: 1, firstname: "Jan", lastname: "Janssens"}

// De functie findIndex werkt analoog maar retourneert de index
const indexuser = users.findIndex(item => item.id === 1);
console.log(indexuser); // 0

// De functie find zoekt naar het enige (of eerste) element dat aan de voorwaarde voldoet
// Als er verschillende objecten aan de voorwaarden voldoen, kan je gebruik maken van filter
const someusers = users.filter(item => item.id < 3);
console.log(someusers);
// 0: {id: 1, firstname: "Jan", lastname: "Janssens"}
// 1: {id: 2, firstname: "Eva", lastname: "De Smet"}
console.log(someusers.length); // 2

// De functie sort sorteert de items van de array als strings by default
console.log(fruit.sort()); // ["blueberry", "melon", "orange", "pineapple", "strawberry"]

// Stel dat je je eigen sorteermethode wil meegeven, dan kan dat als volgt
// Je moet zelf een functie compare voorzien
// Algemene syntax van de functie compare
// function compare(a, b) {
//  if (a > b) return 1;  --> een positief getal betekent dat a groter is dan b
//  if (a == b) return 0;
//  if (a < b) return -1; --> een negatief getal betekent dat a kleiner is dan b
// }

// Stel dat we de strings willen sorteren op aantal letters
function sorterenOpAantalLetters(a, b) {
  if (a.length > b.length) return 1;
  if (a.length === b.length) return 0;
  if (a.length < b.length) return -1;
}
console.log(fruit.sort(sorterenOpAantalLetters)); // ["melon", "orange", "blueberry", "pineapple", "strawberry"]

// Je kan het voorgaande ook verkort schrijven als
fruit.sort(function(a, b) {
  if (a.length > b.length) return 1;
  if (a.length === b.length) return 0;
  if (a.length < b.length) return -1;
});

console.log(fruit); //  ["melon", "orange", "blueberry", "pineapple", "strawberry"]

// Het voorgaande kan je nog korter schrijven als volgt
// a.length > b.length => a.length - b.length > 0 --> een positief getal betekent dat a groter is dan b
// a.length === b.length => a.length - b.length is 0
// a.length < b.length => a.length - b.length < 0 --> een negatief getal betekent dat a kleiner is dan b
fruit.sort((a, b) => a.length - b.length);
console.log(fruit); //  ["melon", "orange", "blueberry", "pineapple", "strawberry"]

// De functie reverse keert de volgorde van de elementen in de array om
fruit.reverse();
console.log(fruit); // ["strawberry", "pineapple", "blueberry", "orange", "melon"]

// De functie split splitst de meegegeven string op in stukken op basis van het opgegeven scheidingsteken
let namen = 'Bilbo, Gandalf, Nazgul';
let arrNamen1 = namen.split(',');
console.log(arrNamen1); // ["Bilbo", " Gandalf", " Nazgul"]

// De split methode heeft een optioneel tweede argument, namelijk de maximumlengte van de array
// Als dit tweede argument opgegeven wordt, worden alle extra elementen genegeerd;
let arrNamen2 = namen.split(',', 2);
console.log(arrNamen2); // ["Bilbo", " Gandalf"]

let str = 'test';
console.log(str.split('')); // ["t", "e", "s", "t"]

// De functie join is de omgekeerde bewerking. De functie join creëert een join waarbij
// de items gescheiden worden door het opgegeven scheidingsteken
let arrNamen3 = ['Bilbo', 'Gandalf', 'Nazgul'];
let strNamen3 = arrNamen3.join(';');
console.log(strNamen3); // Bilbo;Gandalf;Nazgul

// Oefening
// Sorteer de array animals op basis van gewicht: van lichter naar zwaarder
const animals = [
  {
    name: 'lion',
    size: 'medium',
    weight: 150
  },
  {
    name: 'dog',
    size: 'small',
    weight: 10
  },
  {
    name: 'elephant',
    size: 'big',
    weight: 5000
  },
  {
    name: 'cat',
    size: 'small',
    weight: 5
  }
];


console.log(animals);

// Oefening
// Sorteer de onderstaande array op het aantal zijden
let shapes = [
    [5, "Pentagon"],
    [3, "Triangle"],
    [8, "Octagon"],
    [4, "Rectangle"]
    ];







// Oefening
// Schrijf een functie die controleert of een woord een permutatie is van een ander woord, bijvoorbeeld SLAAPT en PLAATS

function isPermutatie(woord1, woord2){
}
console.log(isPermutatie("SLAAPT","PLAATS"));
