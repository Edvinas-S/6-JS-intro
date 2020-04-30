console.log(``);
console.log(`___________Ciklo_"for"_panaudojimas___________`);
// ciklas - kazkas, kas yra kartojama
    // kas tas kazkas?
    // ka kartoja?
    // kiek kartu?

// for ( let i=0; i<10; i++ ) {
//     console.log('Skaicius:', i);
// }

// for ( let i=0; i<10; i=i+2 ) {
//     console.log('Skaicius:', i);
// }
console.log(`1`);
console.log(`1.a`);
let nuo = 0;
let iki = 0;
let skaitmenuSuma = 0;
for (let i=nuo; i<=iki; i++) {
}
console.log(`Salygos nuo 0 iki 0 imtinai skaitmenu suma yra`,skaitmenuSuma);
console.log(`1.b`);
nuo = 0;
iki = 4;
skaitmenuSuma = 0;
for (let i=nuo; i<=iki; i++) {
    skaitmenuSuma = skaitmenuSuma + i;
}
console.log(`Salygos nuo 0 iki 4 imtinai skaitmenu suma yra`,skaitmenuSuma);
console.log(`1.c`);
nuo = 0;
iki = 100;
skaitmenuSuma = 0;
for (let i=nuo; i<=iki; i++) {
    skaitmenuSuma = skaitmenuSuma + i;
}
console.log(`Salygos nuo ${nuo} iki ${iki} imtinai skaitmenu suma yra`,skaitmenuSuma);
console.log(`1.d`);
nuo = 574;
iki = 815;
skaitmenuSuma = 0;
for (let i=nuo; i<=iki; i++) {
    skaitmenuSuma = skaitmenuSuma + i;
}
console.log(`Salygos nuo ${nuo} iki ${iki} imtinai skaitmenu suma yra`,skaitmenuSuma);
console.log(`1.e`);
nuo = -50;
iki = 50;
skaitmenuSuma = 0;
for (let i=nuo; i<=iki; i++) {
    skaitmenuSuma = skaitmenuSuma + i;
}
console.log(`Salygos nuo ${nuo} iki ${iki} imtinai skaitmenu suma yra`,skaitmenuSuma);
console.log(`1.f`);
nuo = -70;
iki = 30;
skaitmenuSuma = 0;
for (let i=nuo; i<=iki; i++) {
    skaitmenuSuma = skaitmenuSuma + i;
}
console.log(`Salygos nuo ${nuo} iki ${iki} imtinai skaitmenu suma yra`,skaitmenuSuma);

console.log(``);
console.log(`2`);
const tekstas = `alus`;
const tekstoIlgis = tekstas.length;
let atbulasTekstas = ``;
for (let i=tekstoIlgis-1; i>=0; i--) {
    atbulasTekstas = atbulasTekstas + tekstas[i];
}
console.log(`Musu tekstas "${tekstas}" atbulai atrodytu taip: "${atbulasTekstas}"`);

console.log(``);
console.log(`3`);
console.log(`3.a`);
nuo = 0;
iki = 11;
let dalmuo = 3;
let kiekis = 0;
for (let i=nuo; i<=iki; i++) {
    if (i % dalmuo === 0)
    kiekis = kiekis + 1;
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalinanciu be liekanos is ${dalmuo} yra ${kiekis} vienetai.`);
nuo = 0;
iki = 11;
dalmuo = 5;
kiekis = 0;
for (let i=nuo; i<=iki; i++) {
    if (i % dalmuo === 0)
    kiekis = kiekis + 1;
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalinanciu be liekanos is ${dalmuo} yra ${kiekis} vienetai.`);
nuo = 0;
iki = 11;
dalmuo = 7;
kiekis = 0;
for (let i=nuo; i<=iki; i++) {
    if (i % dalmuo === 0)
    kiekis = kiekis + 1;
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalinanciu be liekanos is ${dalmuo} yra ${kiekis} vienetai.`);
console.log(`3.b`);
nuo = 8;
iki = 31;
dalmuo = 3;
kiekis = 0;
for (let i=nuo; i<=iki; i++) {
    if (i % dalmuo === 0)
    kiekis = kiekis + 1;
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalinanciu be liekanos is ${dalmuo} yra ${kiekis} vienetai.`);
nuo = 8;
iki = 31;
dalmuo = 5;
kiekis = 0;
for (let i=nuo; i<=iki; i++) {
    if (i % dalmuo === 0)
    kiekis = kiekis + 1;
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalinanciu be liekanos is ${dalmuo} yra ${kiekis} vienetai.`);
nuo = 8;
iki = 31;
dalmuo = 7;
kiekis = 0;
for (let i=nuo; i<=iki; i++) {
    if (i % dalmuo === 0)
    kiekis = kiekis + 1;
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalinanciu be liekanos is ${dalmuo} yra ${kiekis} vienetai.`);
console.log(`3.c`);
nuo = -18;
iki = 18;
dalmuo = 3;
kiekis = 0;
for (let i=nuo; i<=iki; i++) {
    if (i % dalmuo === 0)
    kiekis = kiekis + 1;
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalinanciu be liekanos is ${dalmuo} yra ${kiekis} vienetai.`);
nuo = -18;
iki = 18;
dalmuo = 5;
kiekis = 0;
for (let i=nuo; i<=iki; i++) {
    if (i % dalmuo === 0)
    kiekis = kiekis + 1;
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalinanciu be liekanos is ${dalmuo} yra ${kiekis} vienetai.`);
nuo = -18;
iki = 18;
dalmuo = 7;
kiekis = 0;
for (let i=nuo; i<=iki; i++) {
    if (i % dalmuo === 0)
    kiekis = kiekis + 1;
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalinanciu be liekanos is ${dalmuo} yra ${kiekis} vienetai.`);
