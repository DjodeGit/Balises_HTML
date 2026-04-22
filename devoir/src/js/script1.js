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
    let coutTotal = calculerCoutTotal();
    let coutParPersonne = coutTotal / nbVoyageurs;
    let reste = budgetTotal - coutTotal;
    let resteParPersonne = reste / nbVoyageurs;
    
    // Vérifier si le budget est suffisant
    let statut = reste >= 0 ? "✅" : "❌";
    let messageStatut = reste >= 0 
        ? `Il te reste ${reste} € (${resteParPersonne} € par personne)`
        : `Il te manque ${Math.abs(reste)} € (${Math.abs(resteParPersonne)} € par personne)`;
    
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
            <p><strong>💸 Coût total estimé :</strong> ${coutTotal} €</p>
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
