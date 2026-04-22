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

// Écouter le bouton reset
btnReset.addEventListener("click", resetFormulaire);

// Bonus : Validation en temps réel sur le champ budget
budget.addEventListener("input", function() {
    if (budget.value < 0) {
        budget.value = 0;
    }
});

console.log("✅ Formulaire de voyage chargé !");