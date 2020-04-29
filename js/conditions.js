
console.log(`____________Kintamuju_palyginimas____________`);

// palyginimo oepratoriai:
// rekomenduotina: >, <, <=, >=, ===, !==
// NErekomenduotina: ==, !=
//
// if ( salyga ) {
//     logika, kuria reikia ivykdyti, jei tenkinama salyga
// }
//
// if ( a > b ) {
//     console.log('taip, a yra daugiau uz b');
// } else {
//     console.log('ne, a yra ne daugiau uz b');
// }

console.log(`1`);

console.log(`1.a`);
if ( pirmasSkaicius > antrasSkaicius) {
    console.log(`Taip, pirmas skaicius yra didesnis uz antra - Pomidoras.`);
} else {
    console.log(`Ne, pirmas skaicius nera didesnis uz antra - bandykite kita karta.`); 
}

console.log(`1.b`);
if ( treciasSkaicius < antrasSkaicius) {
    console.log(`Taip, trecias skaicius mazesnis uz antra - Pomidoras.`)
} else {
    console.log(`Ne, trecias skaicius nera mazesnis uz antra - bandykite kita karta.`); 
}

console.log(`1.c`);
if ( antrasSkaicius === treciasSkaicius) {
    console.log(`Liuks, antras ir trecias skaicius yra lygus - Pomidoras.`);
} else {
    console.log(`Deja, antras ir trecias skaicius nera lygus - bandykite kita karta.`);
}

console.log(`1.d`);
if (pirmasSkaicius !== treciasSkaicius) {
    console.log(`Kaip tau tai pavyko, pirmas ir trecias skaicius nera lygus - Pomidoras.`);
} else {
    console.log(`Nu va, pirmas ir trecias skaicius nelygus - bandykite kita karta.`);
}

console.log(`1.e`);
if (treciasSkaicius >= antrasSkaicius) {
    console.log(`Pomidoras! Trecias skaicius yra didenis arba lygus antram skaiciui`);
} else {
    console.log(`Bandykite kita karta. Nes trecias skaicius nera nei didesnis, nei lygus antram skaiciui`);
}

console.log(`1.f`);
if (antrasSkaicius <= pirmasSkaicius) {
    console.log(`Pomidoras! Antras skaicius yra mazesnis arba lygus pirmam skaiciui`);
} else {
    console.log(`Bandykite kita karta. Antras skaicius nera mazenis arba lygus pirmam skaiciui`);
}

console.log(``);
console.log(`2`);

console.log(`Pirmo teksto ilgis =`,pirmasTekstas.length);
console.log(`Antro teksto ilgis =`,antrasTekstas.length);
console.log(`Trecio teksto ilgis =`,treciasTekstas.length);

console.log(``);
console.log(`3`);

console.log(`3.a`);
if (pirmasTekstas.length > antrasTekstas.length) {
    console.log(`Pomidoras, pirmas tekstas ilgesnis uz antra`);
} else {
    console.log(`Bandykite kita karta, pirmas tekstas nera ilgesnis uz antra`);
}

console.log(`3.b`);
if (antrasTekstas.length < treciasTekstas.length) {
    console.log(`Pomidoras, antras tekstas trumpesnis us trecia teksta`);
} else {
    console.log(`Bandykite kita karta, antras tekstas nera ilgesnis uz trecia`);
}

console.log(`3.c`);
if (pirmasTekstas.length === treciasTekstas.length) {
    console.log(`Sveikas Pomidoras, pirmas ir trecias tekstai vienodai ilgi`);
} else {
    console.log(`Kad ir kaip skaudu pranesti teks bandyti kita karta, pirmo ir trecio teksto ilgiai ne vienodi`);
}

console.log(`3.d`);
if (antrasTekstas.length !== treciasTekstas.length) {
    console.log(`Antro ir trecio teksto ilgiai nera lygus - Pomidoras`);
} else {
    console.log(`Antro ir trecio tekstai kazkodel lygus - badykite kita karta`);
}

console.log(`3.e`);
if (pirmasTekstas.length >= treciasTekstas.length) {
    console.log(`Pomidoras, pirmas teksto ilgis yra ilgesnis arba lygus treciam`);
} else {
    console.log(`Bandykite kita karta, pirmo teksto ilgis trumpesnis ir nera lygus treciam teko ilgiui`);
}

console.log(`3.f`);
if (treciasTekstas.length <= antrasTekstas.length) {
    console.log(`Sveikiname - Pomidoras. Trecias teksto ilgis trumpesnis arba lygus antram`);
} else {
    console.log(`Teks bandyti kita karta. Trecias teksto ilgis nera trumpesnis arba lygus antram`);
}

console.log(``);
console.log(`4`);
console.log(`Skaiciaus saraso tipo Nr.1 ilgis:`,sarasoTipoSkaiciai1.length);
console.log(`Teksto saraso tipo Nr.1 ilgis:`, sarasoTipoTekstas1.length);
console.log(`Skaiciaus saraso tipo Nr.2 ilgis:`,sarasoTipoSkaiciai2.length);
console.log(`Teksto saraso tipo Nr.2 ilgis:`, sarasoTipoTekstas2.length);
console.log(`Skaiciaus saraso tipo Nr.3 ilgis:`,sarasoTipoSkaiciai3.length);
console.log(`Teksto saraso tipo Nr.3 ilgis:`, sarasoTipoTekstas3.length);

console.log(``);
console.log(`5`);
console.log(`Uzduotis Nr.5 tokia pati kaip Nr.4`);