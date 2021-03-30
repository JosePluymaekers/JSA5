const superheroes = [
    {
        name: "Batman",
        publisher: "DC Comics",
        alter_ego: "Bruce Wayne",
        first_appearance: "Detective Comics #27",
        weight: "210"
    },
    {
        name: "Superman",
        publisher: "DC Comics",
        alter_ego: "Kal-El",
        first_appearance: "Action Comics #1",
        weight: "220"
    },
    {
        name: "Flash",
        publisher: "DC Comics",
        alter_ego: "Jay Garrick",
        first_appearance: "Flash Comics #1",
        weight: "195"
    },
    {
        name: "Green Lantern",
        publisher: "DC Comics",
        alter_ego: "Alan Scott",
        first_appearance: "All-American Comics #16",
        weight: "186"
    },
    {
        name: "Green Arrow",
        publisher: "DC Comics",
        alter_ego: "Oliver Queen",
        first_appearance: "All-American Comics #16",
        weight: "195"
    },
    {
        name: "Wonder Woman",
        publisher: "DC Comics",
        alter_ego: "Princess Diana",
        first_appearance: "The Incredible Hulk #180",
        weight: "165"
    },
    {
        name: "Blue Beetle",
        publisher: "DC Comics",
        alter_ego: "Dan Garret",
        first_appearance: "Mystery Men Comics #1",
        weight: "145"
    },
    {
        name: "Spider Man",
        publisher: "Marvel Comics",
        alter_ego: "Peter Parker",
        first_appearance: "Amazing Fantasy #15",
        weight: "167"
    },
    {
        name: "Captain America",
        publisher: "Marvel Comics",
        alter_ego: "Steve Rogers",
        first_appearance: "Captain America Comics #1",
        weight: "220"
    },
    {
        name: "Iron Man",
        publisher: "Marvel Comics",
        alter_ego: "Tony Stark",
        first_appearance: "Tales of Suspense #39",
        weight: "250"
    },
    {
        name: "Thor",
        publisher: "Marvel Comics",
        alter_ego: "Thor Odinson",
        first_appearance: "Journey into Myster #83",
        weight: "200"
    },
    {
        name: "Hulk",
        publisher: "Marvel Comics",
        alter_ego: "Bruce Banner",
        first_appearance: "The Incredible Hulk #1",
        weight: "1400"
    },
    {
        name: "Wolverine",
        publisher: "Marvel Comics",
        alter_ego: "James Howlett",
        first_appearance: "The Incredible Hulk #180",
        weight: "200"
    },
    {
        name: "Daredevil",
        publisher: "Marvel Comics",
        alter_ego: "Matthew Michael Murdock",
        first_appearance: "Daredevil #1",
        weight: "200"
    },
    {
        name: "Silver Surfer",
        publisher: "Marvel Comics",
        alter_ego: "Norrin Radd",
        first_appearance: "The Fantastic Four #48",
        weight: "unknown"
    }
]

//Maak een array van alle superhelden namen
const heroNames = superheroes.map((superheroes) => {
    return superheroes.name
});
console.log("Dit zijn alle namen van superhelden:", heroNames)

//Maak een array van alle "lichte" superhelden (< 190 pounds)

const lightHeroes = superheroes.filter((superheroes) => {
    return superheroes.weight <= 190
});

console.log("Dit zijn de lichte superhelden:", lightHeroes)


//Maak een array met de namen van de superhelden die 200 pounds wegen
/* const heavySuperHeroNamesChained = superheroes
    .filter(hero => hero.weight == 200)
    .map(hero => hero.name);
console.log(heavySuperHeroNamesChained);
 */
const heavySuperHeroes = superheroes.filter(hero => {
    return hero.weight == 200;
});
const heavySuperHeroNames = heavySuperHeroes.map(hero => {
    return hero.name;
});

console.log("Dit zijn zware superhelden:", heavySuperHeroNames)


//Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const heroFirstAppearance = superheroes.map((superheroes) => {
    return superheroes.first_appearance
});
console.log("als eerste verschenen in:", heroFirstAppearance)

//Maak een array met alle superhelden van DC Comics. 
const DCheroes = superheroes.filter(DChero => DChero.publisher == "DC Comics");
const DCname = DCheroes.map(hero => hero.name);
console.log("dit zijn de DC comics namen:", DCname)

//Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
const marvelHeroes = superheroes.filter(marvelHero => marvelHero.publisher == "Marvel Comics");
const marvelName = marvelHeroes.map(hero => hero.name);
console.log("dit zijn de Marvel namen:", marvelName)


//Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 
const heroWeights = DCheroes.map(hero => {
    if (hero.weight !== "unknown") {
        return parseInt(hero.weight, 10);
    } else {
        return 0;
    }
});

const addedWeightOfHeroes = heroWeights.reduce((a, b) => {
    return a + b
});

console.log("TotalWeight of DC Comics:", addedWeightOfHeroes);

//Bonus: zoek de zwaarste superheld!

const heroWeights2 = superheroes.map(hero => {
    if (hero.weight !== "unknown") {
        return parseInt(hero.weight, 10);
    } else {
        return 0;
    }
});

var max = heroWeights2.reduce(function (a, b) {
    return Math.max(a, b);
});

console.log(max)

// 8 Bonus: vind de zwaarste superheld!
// First cast all values to a number or 0 if unknown
const allHeroes = superheroes.map(hero => {
    const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
    hero.weight = weight;
    return hero;
});
const heaviestHero = allHeroes.reduce(
    (currentHeaviestHero, currentHero) => {
        if (currentHero.weight > currentHeaviestHero.weight) {
            return currentHero;
        } else {
            return currentHeaviestHero;
        }
    },
    allHeroes[0]
    // met deze laatste waarde geef je aan wat de initiele waarde moet zijn van de functie
);

console.log("Heaviest hero:", heaviestHero);