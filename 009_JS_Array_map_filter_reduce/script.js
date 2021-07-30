const superHeroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]
// 1
const superHeroesNames = function (array) {
    return array.map((item) => { return item.name })
}
console.log(superHeroesNames(superHeroes))
// 2
const LighterThen190 = function (array) {
    return array
        .filter((hero) => { return hero.weight < 190 })
}
console.log(LighterThen190(superHeroes))
// 3
const weight200 = array => array
    .filter(hero => hero.weight === "200")
    .map(hero => hero.name);

console.log(weight200(superHeroes))

// 4
const firstAppearance = array => array.map((item) => item.first_appearance)
console.log(firstAppearance(superHeroes))
// 5.1
const heroesFromDC = array => array.filter(hero => hero.publisher === "DC Comics")
console.log(heroesFromDC(superHeroes))
// 5.2
const heroesFromMarvel = array => array.filter(hero => hero.publisher === "Marvel Comics")
console.log(heroesFromMarvel(superHeroes))
// 6
const totalWeightHeroDC = array => array
    .filter(hero => hero.publisher === "DC Comics")
    .filter(hero => hero.weight != "unknown")
    .map(hero => hero.weight * 1)
    .reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(totalWeightHeroDC(superHeroes))
// 7
const totalWeightHeroMarvel = array => array
    .filter(hero => hero.publisher === "Marvel Comics")
    .filter(hero => hero.weight != "unknown")
    .map(hero => hero.weight * 1)
    .reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(totalWeightHeroMarvel(superHeroes))

// 8
