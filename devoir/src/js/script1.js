// Récupérer le formulaire et les champs
let form = document.getElementById("formVoyage");
let destination = document.getElementById("destination");
let budget = document.getElementById("budget");
let jours = document.getElementById("jours");
let hebergement = document.getElementById("hebergement");
let repasInclus = document.getElementById("repasInclus");
let notes = document.getElementById("notes");
let btnReset = document.getElementById("btnReset");
let divResultat = document.getElementById("resultat");
let effacer = document.getElementById("btnEffacer");
let Sauvegarder = document.getElementById("btnSauvegarder");
let charger = document.getElementById("btnCharger")


// Prix par jour selon l'hébergement
function getPrixHebergement(type) {
    if (type === "auberge") return 30;
    if (type === "moyen") return 80;
    if (type === "luxe") return 150;
    return 0;
}

// Calculer le coût total
function calculerCoutTotal() {
    let nbJours = Number(jours.value);
    let prixHebergement = getPrixHebergement(hebergement.value);
    let coutHebergement = prixHebergement * nbJours;
    
    let coutRepas = repasInclus.checked ? 20 * nbJours : 0;
    
    let coutTotal = coutHebergement + coutRepas;
    return coutTotal;
}

// Calculer la répartition par voyageur
function getMultiplicateurVoyageurs() {
    let radioVoyageurs = document.querySelector('input[name="voyageurs"]:checked');
    if (!radioVoyageurs) return 1;
    
    if (radioVoyageurs.value === "seul") return 1;
    if (radioVoyageurs.value === "couple") return 2;
    if (radioVoyageurs.value === "famille") return 4;
    return 1;
}

//Sauvegarder les dernuers resultats avec le localStorage
function SauvegardeDernierVoyage(){
    let derniervoyage ={
        destination : destination.value,
        budget : budget.value,
        jours : jours.value,
        hebergement : hebergement.value,
        repasInclus: repasInclus.checked,
        voyageurs: document.querySelector('input[name="voyageurs"]:checked')?.value || "seul",
        notes: notes.value,
        dateSauvegarde: new Date().toLocaleString()
    };
    localStorage.setItem("derniervoyage",JSON.stringify(derniervoyage));
    console.log("voyage sauvegarder !");
}
// Charger le dernier voyage sauvegardé
function chargerDernierVoyage() {
    let sauvegarde = localStorage.getItem("derniervoyage");
    if(sauvegarde){
        let voyage = JSON.parse(sauvegarde);
        destination.value=voyage.destination;
        budget.value=voyage.budget;
        jours.value=voyage.jours;
        hebergement.value=voyage.hebergement;
        repasInclus=voyage.repasInclus;
        notes.value = voyage.notes;
        // Sélectionner le bon radio bouton
        let radio = document.querySelector(`input[name="voyageurs"][value="${voyage.voyageurs}"]`);
        if (radio) radio.checked = true;
        divResultat.innerHTML = `
            <h3>📀 Chargement automatique</h3>
            <p>Dernier voyage du ${voyage.dateSauvegarde} restauré.</p>
            <p>Clique sur "Calculer" pour voir le résultat.</p>
        `;
        
        console.log("✅ Dernier voyage chargé !");
    } else {
        console.log("📭 Aucune sauvegarde trouvée");
    }
}
// charger le dernier voyage 
charger.addEventListener("click", function(){
    chargerDernierVoyage();
})

// sauvegarder le dernier voyage
Sauvegarder.addEventListener("click", function(){
    SauvegardeDernierVoyage();
})
// Effacer une sauvegarde 
function EffacerSauvegardes(){
    let effacer = localStorage.removeItem("derniervoyage");
    divResultat.innerHTML = `<h3>Sauvegarde supprimer !</h3>
    <p> toutes les sauvegardes ont ete supprime </p>`;
    console.log("acune sauvegarde trouvee ");
}

// ========== GESTION DE LA MODALE ==========

// Récupérer les éléments de la modale
let modalOverlay = document.getElementById("modalOverlay");
let modalTitre = document.getElementById("modalTitre");
let modalMessage = document.getElementById("modalMessage");
let modalFermer = document.getElementById("modalFermer");
let modalBtnFermer = document.getElementById("modalBtnFermer");

// Fonction pour afficher la modale
function afficherModal(titre, message, estSucces) {
    // Changer le titre et le message
    modalTitre.textContent = titre;
    modalMessage.textContent = message;
    
    // Appliquer classe CSS pour thème success/error
    modalOverlay.className = estSucces ? 'modal-overlay success-theme' : 'modal-overlay error-theme';
    
    // Afficher la modale
    modalOverlay.style.display = "flex";
}

// Fonction pour fermer la modale
function fermerModal() {
    modalOverlay.style.display = "none";
    modalOverlay.className = 'modal-overlay'; // Reset thème
}

// Écouter les clics sur les boutons de fermeture
if (modalFermer) {
    modalFermer.addEventListener("click", fermerModal);
}
if (modalBtnFermer) {
    modalBtnFermer.addEventListener("click", fermerModal);
}

// Fermer la modale si on clique sur le fond sombre
if (modalOverlay) {
    modalOverlay.addEventListener("click", function(event) {
        if (event.target === modalOverlay) {
            fermerModal();
        }
    });
}

// reduction de 10% si le code promo est correct
function CoutTotal_Reduction() {
let coupon= document.getElementById("coupon");

    let coutTotal = calculerCoutTotal();
    let coutTotal1 ;
    coutTotal1=coutTotal;
    let code =coupon.value;
   
    if(code === "promo123"){
        coutTotal1 = coutTotal - (coutTotal*10)/100;
                afficherModal(
                    "🎉 Code valide !",
                    `Félicitations ! Tu économises ${(coutTotal*10).toFixed(2)} €.\n
                    Nouveau total : ${coutTotal1.toFixed(2)} € (au lieu de ${coutTotal.toFixed(2)} €)`,
                    true
                );
    }
    else if(coupon === "" || code !== "promo123"){
        
        afficherModal(
            "❌ Code invalide",
            "Le code promo que tu as saisi n'est pas reconnu.",
            false
        );
    }

return coutTotal1;

}

// Afficher le résultat
function afficherResultat() {
    // Vérifier que les champs sont remplis
    if (destination.value === "") {
        divResultat.innerHTML = `
            <h3>⚠️ Erreur</h3>
            <p>Veuillez renseigner une destination !</p>
        `;
        return;
    }
    
    if (budget.value === "" || budget.value <= 0) {
        divResultat.innerHTML = `
            <h3>⚠️ Erreur</h3>
            <p>Veuillez renseigner un budget valide !</p>
        `;
        return;
    }
    
    // Récupérer toutes les valeurs
    let dest = destination.value;
    let budgetTotal = Number(budget.value);
    let nbJours = Number(jours.value);
    let typeHebergement = hebergement.options[hebergement.selectedIndex].text;
    let repas = repasInclus.checked ? "Oui" : "Non";
    let nbVoyageurs = getMultiplicateurVoyageurs();
    let notesValue = notes.value || "Aucune note";



    
    // Calculs
    let coutTotal1 = CoutTotal_Reduction() ;
    let coutParPersonne = coutTotal1 / nbVoyageurs;
    let reste = budgetTotal - coutTotal1;
    let resteParPersonne = reste / nbVoyageurs;




    
    // Vérifier si le budget est suffisant
    let statut = reste >= 0 ? "✅" : "❌";
    let messageStatut = reste >= 0 
        ? `Il te reste ${reste} € (${resteParPersonne} € par personne)`
        : `Il te manque ${Math.abs(reste)} € (${Math.abs(resteParPersonne)} € )`;
    
    // Afficher le résultat
    divResultat.innerHTML = `
        <h3>📋 Résultat pour ${dest}</h3>
        <div class="details">
            <p><strong>💰 Budget total :</strong> ${budgetTotal} €</p>
            <p><strong>📅 Durée :</strong> ${nbJours} jours</p>
            <p><strong>🏨 Hébergement :</strong> ${typeHebergement}</p>
            <p><strong>🥗 Repas inclus :</strong> ${repas}</p>
            <p><strong>👥 Voyageurs :</strong> ${nbVoyageurs} personne(s)</p>
            <hr>
            <p><strong>💸 Coût total estimé :</strong> ${coutTotal1} €</p>
            <p><strong>👤 Coût par personne :</strong> ${coutParPersonne} €</p>
            <p><strong>${statut} ${messageStatut}</strong></p>
            <hr>
            <p><strong>📝 Notes :</strong> ${notesValue}</p>
        </div>
    `;
}

// Réinitialiser le formulaire
function resetFormulaire() {
    destination.value = "";
    budget.value = "";
    jours.value = "";
    hebergement.value = "moyen";
    repasInclus.checked = false;
    notes.value = "";
    document.querySelector('input[name="voyageurs"][value="seul"]').checked = true;
    
    divResultat.innerHTML = `
        <h3>📋 Résultat du calcul</h3>
        <p>Le formulaire a été réinitialisé. Remplis-le et clique sur "Calculer"</p>
    `;
}

// Écouter l'événement submit du formulaire
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    afficherResultat();
    SauvegardeDernierVoyage();
});

// Ecoute l evenement pour supprimer la derniere sauvegarde
effacer.addEventListener("click",function(){
    EffacerSauvegardes();
})

// Écouter le bouton reset
btnReset.addEventListener("click", resetFormulaire);

// Bonus : Validation en temps réel sur le champ budget
budget.addEventListener("input", function() {
    if (budget.value < 0) {
        budget.value = 0;
    }
});

console.log("✅ Formulaire de voyage chargé !");








//API avec fetch
// ========== PARTIE API ==========

// API gratuite : https://restcountries.com/
function getInfosPays(pays) {
    // L'API attend le nom du pays en anglais
    let url = `https://restcountries.com/v3.1/name/${pays}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pays non trouvé");
            }
            return response.json();
        })
        .then(data => {
            // data[0] = premier résultat
            let paysData = data[0];
            
            let capitale = paysData.capital?.[0] || "Non disponible";
            let monnaie = paysData.currencies ? Object.keys(paysData.currencies)[0] : "Non disponible";
            let population = paysData.population.toLocaleString();
            let drapeau = paysData.flags?.png || "";
            let region = paysData.region;
            
            // Afficher les infos
            afficherInfosPays(capitale, monnaie, population, drapeau, region);
        })
        .catch(error => {
            console.log("Erreur API : " + error);
            afficherInfosPays("Non trouvée", "Non disponible", "?", "", "");
        });
}

// Afficher les infos du pays dans la page
function afficherInfosPays(capitale, monnaie, population, drapeau, region) {
    let divInfos = document.getElementById("infosPays");
    
    if (!divInfos) {
        
        let resultatDiv = document.getElementById("resultat");
        divInfos = document.createElement("div");
        divInfos.id = "infosPays";
        divInfos.style.marginTop = "20px";
        divInfos.style.padding = "10px";
        divInfos.style.border = "1px solid #ccc";
        divInfos.style.borderRadius = "5px";
        resultatDiv.parentNode.insertBefore(divInfos, resultatDiv.nextSibling);
    }
    
    let drapeauHTML = drapeau ? `<img src="${drapeau}" width="50" style="vertical-align:middle; margin-right:10px">` : "";
    
    divInfos.innerHTML = `
        <h4>🌍 Informations sur le pays</h4>
        ${drapeauHTML}
        <p><strong>🏙️ Capitale :</strong> ${capitale}</p>
        <p><strong>💰 Monnaie :</strong> ${monnaie}</p>
        <p><strong>👥 Population :</strong> ${population}</p>
        <p><strong>🗺️ Région :</strong> ${region}</p>
        
    `;
}

// Modifier la fonction afficherResultat pour ajouter l'appel API
// Ajoute cette ligne à la fin de ta fonction afficherResultat() :

function afficherResultat1() {
    // ... tout ton code existant (vérifications, calculs, affichage) ...
    
    // AJOUTE CET APPEL API À LA FIN
    if (destination.value !== "") {
        getInfosPays(destination.value);
    }
}

// Chercher les infos manuellement (sans attendre le calcul)
function rechercherInfosPays() {
    if (destination.value !== "") {
        getInfosPays(destination.value);
    } else {
        alert("Tape d'abord une destination !");
    }
}

// Ajoute cet écouteur dans ton code (quand la page charge)
// Tu dois d'abord créer un bouton dans ton HTML :
// <button type="button" id="btnInfosPays">🌍 Infos sur ce pays</button>

let btnInfos = document.getElementById("btnInfosPays");
if (btnInfos) {
    btnInfos.addEventListener("click", rechercherInfosPays);
}


