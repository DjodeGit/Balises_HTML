/*ex1: recuperer les element du html*/
let changer = document.getElementById("btnChanger");
let cacher = document.getElementById("btnCacher");
let afficher = document.getElementById("btnAfficher");
let rouge = document.getElementById("btnRouge");
let vert = document.getElementById("btnVert");
let bleu = document.getElementById("btnBleu");
let Inc = document.getElementById("btnIncrement");
let vcompteur = document.getElementById("valeurCompteur");
let reset = document.getElementById("btnReset");
let titre= document.getElementById("titrePrincipal");
let message= document.getElementById("message");
let incrementer = document.getElementById("incrementer")
let btnChangerTitre = document.getElementById("btnChangerTitre");
let inputTache = document.getElementById("nouvelleTache");
let btnAjouter = document.getElementById("btnAjouter");
let btnSupprimer = document.getElementById("btnSupprimer");
let listeTaches = document.getElementById("listeTaches");

let disparait = document.getElementById("disparait");
/*ex2: charger du texte dans le html*/
changer.addEventListener("click", function(){
    message.textContent="Le texte a été changé !";
    message.style.fontWeight = "bold";
});

rouge.addEventListener("click", function(){ 
    message.style.color = "red";
});
vert.addEventListener("click", function(){
    message.style.color = "green";
});
bleu.addEventListener("click",function(){
    message.style.color = "blue";
})
let  compteur =0;
Inc.addEventListener("click", function(){
    compteur++;
    vcompteur.textcontent = compteur;
    if (compteur>10){
        vcompteur.style.color="red";
        vcompteur.textcontent = "compteur dépassé";

    }
    else if(compteur>6){
        vcompteur.style.color="orange";
    }
    else{
        vcompteur.style.color="maroon";
    }
});
reset.addEventListener("click",function(){
    compteur=0
})
cacher.addEventListener("click", function(){
    message.style.display="none";
});
afficher.addEventListener("click",function(){
    message.style.display= "block"
})
Inc.addEventListener("click",function(){
    let v = incrementer.value;
    v++;
    incrementer.content="v";
});




btnChangerTitre.addEventListener("click", function() {
    titre.textContent = "Mon Super Site Frontend";
});

btnAjouter.addEventListener("click", function() {
    let tache = inputTache.value;
    if (tache !== "") {
        let li = document.createElement("li");
        li.textContent = tache;
        listeTaches.appendChild(li);
        inputTache.value = ""; // vider le champ
    }
    if(disparait.textContent.length >0){
        disparait.textContent = "";
    }
});

btnSupprimer.addEventListener("click", function() {
    if (listeTaches.children.length > 0) {
        listeTaches.removeChild(listeTaches.lastElementChild);
    }
});
inputTache.addEventListener("input", function() {
    disparait.textContent = inputTache.value;
}); 
