/*EXERCICE 1*/
let nom='Ali';

let age=26;
let estmajeur=true;
let a=20;
let b=10;

console.log('Commencons a apprendre  le js');
console.log(typeof nom);
console.log(typeof age);
console.log(typeof estmajeur);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);



/*EXERCICE 2:
Crée les variables : economies, billet, sac, chaussures

Calcule le coût total du billet + sac + chaussures

Calcule ce qu'il te reste après avoir tout acheté

Affiche dans la console :
"Il me reste X € après avoir acheté le billet, le sac et les chaussures"

*/
let economies = 1200;
let billet=350;
let sac = 85;
let chaussures = 120;
let cout_total = billet + sac + chaussures;
let reste = economies - cout_total;
console.log("Il me reste "+reste+"€ après avoir acheté le billet, le sac et les chaussures")
console.log(`il me reste ${reste}€ après avoir acheté le billet, le sac et les chaussures`);

/*EXERCICE 3:
Conditions(if/else) utiliser les operateurs de comparaison dans les conditions
*/
let prix=2000;
let note = 18;
let temperature =32;
let pays = 'France';
let status = 'etudiant';
if(prix<=2000){
    console.log("le prix est insuffisant " );
}
else if(prix<=4000){
    console.log("le prix est largement suffisant " );
}
else{
    console.log("le prix est suffisant et nous aurons un reste bien considerable " );
}

if(pays==='France' && status==='etudiant' && note>=8){
    console.log("vous avez droit a une reduction de 20% " );
}
else if(pays==='France' && status==='etudiant' && note>=10){
    console.log("vous avez droit a une reduction de 30% " );
}
else if(pays==='France' && status==='etudiant' && note>=15){
    console.log("vous avez droit a une reduction de 50% " );
}
else if (pays==='France' && status!=='etudiant' && note>=18){
    console.log("vous avez droit a une reduction de 10% " );
}
else{
    console.log("vous n'avez pas droit a une reduction " );
}

if(temperature<0){
    console.log("il fait tres froid " );
}
else if(temperature>=0 && temperature<15){
    console.log("il fait froid " );
}
else if(temperature>=15 && temperature<25){
    console.log("il fait doux " );
}
else if(temperature>=25 && temperature<35){
    console.log("il fait chaud " );
}
else{
    console.log("il fait tres chaud " );
} 


/*EXERCICE 4:
Boucles (for)
*/
let n=7;
let s=0;
let payss = ['France','Allemagne','Espagne','Italie','Portugal'];
for(let i=0;i<=12;i++){
    console.log(`${n} x ${i} =  ${n*i}`);
    
}
for(let i =0; i<12;i++){
    s=s+i;
}
console.log(`la somme des 12 premiers terme est ${s}`);
console.log("les pays disponibles dans la liste sont :");
for(let i=0;i<payss.length;i++){
    console.log(`✈️${payss[i]}`);
}