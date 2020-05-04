console.log(``);
console.log(`______________Funkcijos______________`);
// NaN - "Not a Number", nors JS tai "skaicius-nesamone".
// Infinity - Begalybe, tai skaiciaus tipo, bet ne validus skaicius.
console.log(`1 tusciaFunkcija`);
function tusciaFunkcija( /* a. kintamieji (tuscia) */ ) {
    // b. validacija
    //      (tuscia)
    // b. logika
    //      (tuscia)
    // c. grazina rezultata
    return false;
}
console.log( tusciaFunkcija() );

console.log(``);
console.log(`2 daugyba`);

function daugyba ( pirmas, antras) {
        // VALIDACIJA
    if (typeof(pirmas) !== `number`) {
        return console.error(`Klaida, pirma reiksme turi buti skaicius`);
    }
    if (typeof antras !== "number") {
        return console.error(`Klaida, antra reiksme turi buti skaicius`);   
    }
    // ========== Uzrasymas skiriasi, bet esme ta pati =============
     if (isNaN(pirmas) === true) {
       return console.error(`Klaida, pirma reiksme turi buti tikras skaicius`);
    }
    if (``+antras === `NaN` ) {
        return console.error(`Klaida, antra reiksme turi buti tikras skaicius`);
    }
    // ========== Uzrasymas skiriasi, bet esme ta pati =============
    if (isFinite(pirmas) === false) {
        return console.error(`Klaida, pirma reikmse turi buti ne begalybe`);
    }
    if (``+antras === 'Infinity') {
        return console.error(`Klaida, antra reiksme turi buti ne begalybe`);
    }
            // LOGIKA
    const rezultatas = pirmas * antras;

            // REZULTATAS
    return rezultatas;   
} 
console.log(`Sudauginus musu pirma ${pirmasSkaicius} ir antra ${antrasSkaicius} skaiciu gauname:`);
console.log(daugyba(pirmasSkaicius,antrasSkaicius));
console.log(`Sudauginus trecia ${treciasSkaicius} ir antra ${antrasSkaicius} gauname:`);
console.log(daugyba(treciasSkaicius, antrasSkaicius));
console.log(`Pirma ${pirmasSkaicius} su treciu ${treciasSkaicius}:`);
console.log(daugyba(pirmasSkaicius, treciasSkaicius));

console.log(``);
console.log(`3 skaitmenuKiekisSkaiciuje`);

function skaitmenuKiekisSkaiciuje (skaicius) {
    if (typeof(skaicius) !== 'number') {
        return console.error(`Pateikta netinkamo tipo reiksme`);
    }
    if (isFinite(skaicius) === false) {
        return console.error(`Pateikta netinkamo tipo reiksme`);
    }
    const skaitmenuKiekis = ``+skaicius;
    let kiekis = skaitmenuKiekis.length;
    // jei skaicius su kableliu:
    if ( skaicius % 1 !== 0) {
        kiekis--;
    }
    // jei neigiamas skaicius:
    if (skaicius < 0)
        kiekis--;

    return kiekis
}
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje( 781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), '->', 11 );
console.log( skaitmenuKiekisSkaiciuje( 3.1415 ), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje( -12345 ), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje( -3.1415 ), '->', 5 );

console.log(``);
console.log(`4 didiausiasSkaiciusSarase`);

function didziausiasSkaiciusSarase(skaiciuSarasas) {
    if (Array.isArray(skaiciuSarasas) === false) {
        return console.error(`Klaida, turi buti array tipo`)
    }
    if (skaiciuSarasas.length === 0) {
        return console.error(`Klaida, sarasas negali buti tuscias`);
    }   
    // "didziausias" = maziausias, bet ne normalus skaicius
    // einame per skaiciu sarasa
        // tikriname ar einamasis skaicius yra tikras skaicius
            // jei ne:
                // einam prie sekancio saraso nario
        // tikriname ar einamasis skaicius didesnis uz "didziausias"
            // jei taip:
                // "didizausias" = einamasis skaicius
    // po visko patikriname ar tai normalus skaicius

    let  didziausias = -Infinity;
    for (let i = 0; i < skaiciuSarasas.length; i++) {
        const einamasisSkaicius = skaiciuSarasas[i];
        if (isFinite(einamasisSkaicius) === false) {
            continue;
        }
        if (einamasisSkaicius > didziausias) {
            didziausias = einamasisSkaicius;
        }
        
    }
    if (didziausias === -Infinity) {
        return console.error(`Klaida, turi buti tikras skaicius`);
    }
    
    return didziausias
}
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( 1 ) );
console.log( didziausiasSkaiciusSarase( true ) );
console.log( didziausiasSkaiciusSarase( false ) );
console.log( didziausiasSkaiciusSarase( [] ) );
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, Infinity ] ) );
console.log( didziausiasSkaiciusSarase( [ -Infinity, -Infinity, -Infinity ] ) );

console.log( didziausiasSkaiciusSarase( [ 1 ] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), '->', 78 );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ), '->', 69 );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1 );
console.log( didziausiasSkaiciusSarase( [ 1, Infinity, 3 ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ 1, 3, Infinity ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ Infinity, 1, 3 ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ 1, Infinity, Infinity ] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [ Infinity, 1, Infinity ] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, 1 ] ), '->', 1 );

console.log(``);
console.log(`5 isrinktiRaides`);

function isrinktiRaides(tekstas, zingsnis) {
    if (typeof(tekstas) !== `string`) {
        return console.error (`Klaida, pirmasis kintamasis turi buti tekstas`);
    }
    if (tekstas.length === 0) {
        return console.error (`Klaida, pirmasis kintamasis neturi buti tuscias`);
    }
    if (tekstas.length >= 100) {
        return console.error(`Klaida, tekstas neturetu buti ilgesnis nei 100 simboliu`);
    }
    if (typeof(zingsnis) !== 'number') {
        return console.error(`Klaida, antrasis kintamasis turetu buti skaicius`);
    }
    if (zingsnis === 0 ) {
        return console.error(`Klaida, zingsnis turi buti daugiau nei nulis`)
    }
    if (tekstas.length < zingsnis) {
        return console.error (`Klaida, zingsnis turi buti mazesnis skaicius nei yra tekste raidziu`);
    }
    if (isFinite(zingsnis) !== true) {
        return console.error(`Klaida, zingsnis turi  buti normalus skaicius`);
    }
    if (zingsnis % 1 !== 0) {
        return console.error(`Klaida, zingsnis turi buti sveikas skaicius`);
    }

    let naujasZodis=``;
    if (zingsnis > 0) {
    for (let i=zingsnis-1; i<tekstas.length; i=i+zingsnis) {
        naujasZodis = naujasZodis + tekstas[i];
    }
    // jei galvotume jog zingsnis < 0 isrenka nuo zodzio galo raides ir sudeda jas i atskira zodi
    } else {
        for ( let i=tekstas.length+zingsnis; i>=0; i=i+zingsnis ) {
       naujasZodis = naujasZodis + tekstas[i];
        }
    }
    return naujasZodis
}
console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( '', 0 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 1.5 ) );
console.log( isrinktiRaides( 'abcdefghijkl', Infinity ) );
console.log( isrinktiRaides( 'abcdefghijkl', NaN ) );
console.log(isrinktiRaides(`asdfghjklmnbvcxswedrftgyhujikoplkujytghnbvgthyujhgfdvghjkiujmasdfghjklmnbvcxswedrftgyhujikoplkujytghnbvgthyujhgfdvghjkiujm`, 30));

console.log( isrinktiRaides( 'abcdefg', 2 ), '->', 'bdf' );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ), '->', 'cfil' );
console.log( isrinktiRaides( 'abcdefghijkl', 1 ), '->', 'abcdefghijkl' );
console.log( isrinktiRaides( 'abcdefg', -2 ), '->', 'fdb' );
console.log( isrinktiRaides( 'abcdefghijkl', -3 ), '->', 'jgda' );
console.log( isrinktiRaides( 'asdfghjkl', -1 ), '->', 'lkjhgfdsa' );

console.log(``);
console.log(`6 dalyba`);

function dalyba(pirmas, antras) {
    if (!isFinite(pirmas) ||              // ! reskia NE nebaigtinis
        !isFinite(antras)) {
        return console.error(`KLAIDA, kazkas negerai su tavo skaiciais!`);
    }
    if (typeof(pirmas) !== 'number' ||
        typeof(antras) !== 'number') {
        return console.error(`Klaida, duok normalius skaicius`);
    }
    if (antras === 0 ) {
        return console.error(`Klaida, juk dalyba is 0 tau nepriimtina`);
    }
    return pirmas / antras
}
console.log( dalyba(Infinity, 4) );
console.log( dalyba(8, Infinity) );
console.log(dalyba(NaN, 2));
console.log(dalyba(false, 1));
console.log(dalyba(10, true));
console.log( dalyba(8, 0) );

console.log( dalyba(8, -4) );
console.log( dalyba(0, 4) );

