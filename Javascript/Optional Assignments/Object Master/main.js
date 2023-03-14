const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const idBy3 = pokémon.filter(monster => monster.id % 3 === 0);
console.log("an array of pokémon objects where the id is evenly divisible by 3");
console.log(idBy3);

console.log("-----------------------------------------");
const fireType = pokémon.filter(monster => monster.types.includes("fire"));
console.log("an array of pokémon objects that are 'fire' type")
console.log(fireType);

console.log("-----------------------------------------");
const multiType = pokémon.filter(monster => monster.types.length > 1);
console.log("an array of pokémon objects that have more than one type");
console.log(multiType);

console.log("-----------------------------------------");
const names = pokémon.map(monster => monster.name);
console.log("an array with just the names of the pokémon");
console.log(names);

console.log("-----------------------------------------");
const names99 = pokémon.filter(monster => monster.id > 99).map(monster => monster.name);
console.log("an array with just the names of pokémon with an id greater than 99");
console.log(names99);

console.log("-----------------------------------------");
const namesPoison = pokémon.filter(monster => monster.types[0] === "poison").map(monster => monster.name);
console.log("an array with just the names of the pokémon whose only type is poison");
console.log(namesPoison);

console.log("-----------------------------------------");
const firstTypeFlying = pokémon.filter(monster => monster.types[1] === "flying").map(monster => monster.types[0]);
console.log("an array containing just the first type of all the pokémon whose second type is 'flying'");
console.log(firstTypeFlying);

console.log("-----------------------------------------");
const normalType = pokémon.filter(monster => monster.types.includes("normal"))
console.log("a count of the number of pokémon that are 'normal' type");
console.log(normalType.length);