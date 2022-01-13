"use strict"

/*
Užduotis

Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

Papildomai
Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loopnurodydami informaciją iš masyvo.
*/



var contries = [
    { country: "Portugalija", people: 10.26, countrySize: 92212},
    { country: "Lietuva", people: 2.78, countrySize: 65300},
    { country: "Japonija", people: 125.36, countrySize: 377975},
    { country: "Hong Kong", people: 7.50, countrySize: 1110},
    { country: "Tailandas", people: 68.29, countrySize: 514000},
    { country: "JAV", people: 298.244, countrySize: 9631418},
];


function sizePerPerson(country, people, countrySize) {
    for (var x of contries)
    var average = countrySize / people;
    // console.log(`Country: ${country}, People: ${people} mln, Size of Country: ${countrySize} km²`)
    console.log(`Šalis ${country}, joje gyvena ${people} mln. gyventojų. Valstybės plotas: ${countrySize} km² plotas tenkantis vienam gyventojui: ${average.toFixed(2)} m².`)
    console.log("------------------------------------------")
}

for (var x of contries) {
    sizePerPerson(x.country, x.people, x.countrySize);
} 