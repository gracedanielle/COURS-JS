let age = 11;
let prixbilletm16 = 1500;
let prixbillet16p = 2500;
let billetm16 = 0;
let billet16p = 0 ;
let recettem16 = 0;
let recette16p = 0;
let recettetotale = 0;
let totalticket = 0;
while (age >= 11 && age <= 20) {
    if (age < 16) {
    billetm16++;
    recettem16 += prixbilletm16;
    console.log(`age : ${age}, prix du billet : ${prixbilletm16}`);
    }
    else {
      billet16p+=1
      recette16p += prixbillet16p;
      console.log(`age : ${age}, prix du billet : ${prixbillet16p}`);
      }
      age+=1;
}
      recettetotale = recette16p + recettem16
      console.log(`recettetotale : ${recettetotale}`)
      Totalticket = billet16p + billetm16
      console.log(`Totalticket : ${Totalticket}`)
