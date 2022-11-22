const tekst = "let's meet at 8PM to go watch Jimmy Carr.";

const tekstUpper = tekst.toUpperCase(); // toUpperCase - prebacuje ceo tekst u velika slova!!

const izdvojen = tekst.substring(6,20); // substring - sece tekst od karaktera koji smo prvi zadali do karaktera koji smo zadali!!

const izmenjen = tekst.replaceAll(/e/g, "*"); /* ovo - /e/g - predstavlja regularni izraz koji uvek pocinje
 sa kosom crtom i zavrsava sa kosom crtom., A slovo g mu govori da trazi svuda u recenici slova e u ovom slucaju
 tako da nam je protrebno i slovo g posle kose crte da mu kaze da trazi sva slova e!!! 
*/

const podeljen = tekst.split(" "); /* Split nas pita kako zelimo da podelimo nas tekst! U ovom slucaju ga delim po spejsu*/

console.log(tekst);
console.log(tekstUpper);
console.log(izdvojen);
console.log(izmenjen);
console.log(podeljen);

