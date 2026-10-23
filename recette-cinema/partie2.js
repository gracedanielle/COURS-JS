let age = 11;
let prixbilletm16 = 1500;
let prixbillet16p = 2500;
let billetm16 = 0;
let billet16p = 0 ;
let billet18 = 0;
let recettem16 = 0;
let recette16p = 0;
let recette18plus = 0;
let prixbillet18 = 2000;
let recettetotale = 0;
let totalticket = 0;
while (age >= 11 && age <= 20) {
      if (age < 16) {
         billetm16++;
         recettem16 += prixbilletm16;
      }
      else if (age >= 16 && age <=17) {
         billet16p+=1;
         recette16p += prixbillet16p;
      }
      else {
       billet18++;
       recette18plus += prixbillet18;
      }
      age++;
}
recettetotale = recette16p + recettem16 +recette18plus
console.log(`recettetotale : ${recettetotale}`)