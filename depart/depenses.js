const nom = 'Awa'; // Type : string
const budget = 30000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transport = Number (transportTexte);// Type : string ; unité : FCFA
const alimentation = Number (alimentationTexte);// Type : string ; unité : FCFA
const loisirs = Number (loisirsTexte);// Type : string ; unité : FCFA

// TODO : calculez le total, le budget restant et budgetRespected.
const totalDepenses = transport + alimentation + loisirs;// Type : number ; unité : FCFA
const budgetRestant = budget - totalDepenses; // Type : number ; unité : FCFA
const budgetRespected = budgetRestant >= 0; // Type : boolean`

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Nom :${nom}`);
console.log(`budget: ${budget}`);
console.log(`trois dépenses : ${transport}, ${alimentation}, ${loisirs}`);
console.log(`total : ${totalDepenses}`);
console.log(`Reste: ${budgetRestant}`);
console.log(`etat du budget : ${budgetRespected}`);
