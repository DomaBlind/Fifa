const csapatAdat = [
"Anglia;4;0;1662", 
"Argentína;10;0;1614", 
"Belgium;1;0;1752", 
"Brazília;3;-1;1719", 
"Chile;17;-3;1576", 
"Dánia;14;-1;1584", 
"Franciaország;2;1;1725", 
"Hollandia;13;3;1586", 
"Horvátország;8;-1;1625", 
"Kolumbia;9;-1;1622", 
"Mexikó;12;0;1603", 
"Németország;16;-1;1580", 
"Olaszország;15;1;1583", 
"Peru;19;0;1551", 
"Portugália;5;1;1643", 
"Spanyolország;7;2;1631", 
"Svájc;11;0;1604", 
"Svédország;18;0;1560", 
"Szenegál;20;0;1546", 
"Uruguay;6;-1;1639"
];

// 1. Hány csapat szerepel a ranglistán?
const csapatokSzama = csapatAdat.length;
document.write(`1.) A ranglistán összesen ${csapatokSzama} csapat szerepel.<br><br>`);

// 2. Átlagpontszám kiszámítása
const pontszamok = csapatAdat.map(adat => parseInt(adat.split(';')[3]));
const atlagPont = pontszamok.reduce((sum, pont) => sum + pont, 0) / pontszamok.length;
document.write(`2.) A csapatok átlagpontszáma: ${atlagPont.toFixed(2)}<br><br>`);

// 3. Csapatok, akik az átlagnál több pontot értek el
const csapatokAtlagTobb = csapatAdat.filter(adat => parseInt(adat.split(';')[3]) > atlagPont);
document.write('3.) A csapatok, akik több pontot értek el az átlagnál:<br>');
csapatokAtlagTobb.forEach(adat => {
const [nev, helyezes, valtozas, pont] = adat.split(';');
document.write(`${nev}: Helyezés - ${helyezes}, Pontszám - ${pont}<br>`);
});
document.write('<br>');

// 4. A legtöbbet javító csapat
let maxValtozas = 0;
let legtobbetJavitoCsapat = '';

csapatAdat.forEach(adat => {
const [nev, helyezes, valtozas, pont] = adat.split(';');
const valtozasInt = parseInt(valtozas);

if (Math.abs(valtozasInt) > Math.abs(maxValtozas)) {
    maxValtozas = valtozasInt;
    legtobbetJavitoCsapat = adat;
}
});

const [nev, helyezes, valtozas, pont] = legtobbetJavitoCsapat.split(';');
document.write(`4.) A legtöbbet javító csapat: ${nev} (Helyezés: ${helyezes}, Pontszám: ${pont}, Változás: ${valtozas})<br><br>`);

// 5. Magyarország csapata szerepel-e a listán?
const magyarorszag = csapatAdat.some(adat => adat.split(';')[0] === 'Magyarország');
if (magyarorszag) {
document.write('5.) Magyarország csapata szerepel a listán.<br><br>');
} else {
document.write('5.) Magyarország csapata nem szerepel a listán.<br><br>');
}

// 6. Statisztika a helyezésváltozások alapján
const valtozasok = csapatAdat.reduce((acc, adat) => {
const valtozas = adat.split(';')[2];
acc[valtozas] = acc[valtozas] || 0;
acc[valtozas]++;
return acc;
}, {});

document.write('6.) Helyezésváltozás statisztika (csapatok száma > 1):<br>');
for (const valtozas in valtozasok) {
if (valtozasok[valtozas] > 1) {
    document.write(`Valtozás: ${valtozas} -> Csapatok száma: ${valtozasok[valtozas]}<br>`);
}
}
document.write('<br>');