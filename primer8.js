const tekucaGodina = 2022;
const godiste = 2004;
const punoletna = (tekucaGodina - godiste) > 17 ? "da" : "ne"; /* ovaj operator sluzi u slucaju kada nam treba neki
tekstualni odgovor a ne samo odgovor sa true i false*/

console.log(punoletna);

const punoletna2 = (tekucaGodina - godiste) > 17;
console.log(punoletna2);