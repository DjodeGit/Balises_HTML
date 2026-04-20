/*EXERCICE 1*/
let nom='Ali';
let n=7;
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

for(let i=0;i<10;i++){
    console.log(n+'x'+i+'='+n*i);
}

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