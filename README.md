# Balises en html
## balises de base pour un document html
```bash
1. <html> : utliser pour englober la page html 
attribut : lang  
ex :<html lang="fr">

2. <head> : toujours utilisee dans une page html et n a pas d attribut

3. <meta> utiliser pour definir l encodage et rendre le site responsive
attribut : charset, content, initial-scale 
ex : <meta charset="UTF-8">, <meta content="width=device-width, initial-scale=1.0">

4. <title> : utiliser pour mettre le nom de la page et pas d attribut.

5. <body> : utiliser pour contenir le corps de la page html
attribut : class , id .
ex : <body class= "dark">

6. <link> : utiliser pour lier plusieurs pages 
attribut : rel,href
ex : <link rel="stylesheet" style="style.css"

7. <script> : utiliser pour ajouter du javascript.
attribut : src. 
ex :<script src="app.js" defer></script>  

8. <style> : utiliser pour ajouter du style 
attribut : pas vraiment specifique 



```
## Balises sémantiques HTML5
```bash
9. <header> : utiliser pour l entete de la page 
attribut : class, id 
ex : <header class ="header">, <header id ="header">

10. <nav> : utiliser pour representer le menu pour la navigation
attribut : class ,id .
ex: <nav class ="nav">

11. <section> : utilise pour diviser le contenu en sections thématiques
attribut : class, id 
ex : <section class="contenu-principal">

12. <main> : contient le contenu principal de la page
attribut : class, id
ex : <main id="contenu">

13. <article> : représente un contenu indépendant (article de blog, news)
attribut : class, id
ex : <article class="post">

14. <aside> : contenu indirectement lié au contenu principal (sidebar)
attribut : class, id
ex : <aside class="barre-laterale">

15. <footer> : pied de page avec infos légales, copyright
attribut : class, id
ex : <footer class="pied-page">
```
## Balises de texte et mise en forme

```bash
16. <h1> à <h6> : titres de différentes tailles (h1 principal)
attribut : class, id
ex : <h1 class="titre-principal">Titre</h1>

17. <p> : paragraphe de texte
attribut : class, id
ex : <p class="description">Texte du paragraphe</p>

18. <div> : conteneur générique pour grouper des éléments
attribut : class, id
ex : <div class="conteneur">

19. <span> : conteneur inline générique
attribut : class, id
ex : <span class="highlight">texte mis en évidence</span>

20. <strong> : texte important (gras sémantique)
pas d'attribut spécifique
ex : <strong>Texte important</strong>

21. <em> : texte mis en évidence (italique sémantique)
pas d'attribut spécifique
ex : <em>Texte mis en évidence</em>

22. <code> : code informatique inline
pas d'attribut spécifique
ex : <code>console.log()</code>

23. <pre> : texte préformaté (préserve espaces et retours)
pas d'attribut spécifique
ex : <pre>Texte
  préformaté</pre>

24. <blockquote> : citation longue
attribut : cite
ex : <blockquote cite="url">Citation</blockquote>
```
## Balises multimédia et tableaux


```bash
25. <img> : image
attribut : src, alt, width, height
ex : <img src="image.jpg" alt="Description">

26. <table> : tableau de données
attribut : class, id
ex : <table class="donnees">

27. <thead> : en-tête du tableau
pas d'attribut spécifique
ex : <thead><tr><th>En-tête</th></tr></thead>

28. <tbody> : corps du tableau
pas d'attribut spécifique
ex : <tbody><tr><td>Donnée</td></tr></tbody>

29. <tr> : ligne de tableau
pas d'attribut spécifique
ex : <tr><td>Cellule</td></tr>

30. <th> : cellule d'en-tête
attribut : scope
ex : <th scope="col">En-tête</th>

31. <td> : cellule de données
attribut : rowspan, colspan
ex : <td rowspan="2">Cellule</td>
```

## Balises de formulaire
```bash
32. <form> : conteneur de formulaire
attribut : action, method
ex : <form action="/submit" method="post">

33. <input> : champ de saisie
attribut : type, name, placeholder, required
ex : <input type="text" name="nom" placeholder="Votre nom" required>

34. <button> : bouton cliquable
attribut : type
ex : <button type="submit">Envoyer</button>

35. <label> : étiquette pour champ de formulaire
attribut : for
ex : <label for="nom">Nom :</label>

36. <select> : menu déroulant
attribut : name
ex : <select name="choix"><option>Option</option></select>

37. <option> : option du menu déroulant
attribut : value, selected
ex : <option value="1" selected>Premier</option>

38. <textarea> : zone de texte multiligne
attribut : rows, cols
ex : <textarea rows="4" cols="50"></textarea>

```

## Balises avancées et multimédia

```bash 

39. <video> : vidéo
attribut : src, controls, width, height
ex : <video src="video.mp4" controls width="400"></video>

40. <audio> : audio
attribut : src, controls
ex : <audio src="audio.mp3" controls></audio>

41. <figure> : conteneur pour média avec légende
pas d'attribut spécifique
ex : <figure><img src="img.jpg"><figcaption>Légende</figcaption></figure>

42. <figcaption> : légende d'une figure
pas d'attribut spécifique
ex : <figcaption>Description de l'image</figcaption>

43. <details> : information dépliable
pas d'attribut spécifique
ex : <details><summary>Cliquez</summary>Contenu</details>

44. <summary> : titre du details
pas d'attribut spécifique
ex : <summary>Plus d'infos</summary>
```
```bash
45. <progress> : barre de progression
attribut : value, max
ex : <progress value="70" max="100"></progress>

46. <meter> : jauge de mesure
attribut : value, min, max
ex : <meter value="0.6" min="0" max="1"></meter>

47. <canvas> : zone de dessin
attribut : width, height
ex : <canvas width="200" height="100"></canvas>

48. <svg> : graphiques vectoriels
attribut : width, height, viewBox
ex : <svg width="100" height="100"><circle cx="50" cy="50" r="40"/></svg>

49. <iframe> : fenêtre intégrée
attribut : src, width, height
ex : <iframe src="https://example.com" width="300" height="200"></iframe>

50. <object> : objet embarqué (PDF, applet)
attribut : data, type
ex : <object data="document.pdf" type="application/pdf"></object>

```
# Comment utiliser une langue autre que ce qui nous ai propose par le navigateur
```bash 
1. aller dans google font
2. puis choisir la langue souhaitee 
3. ensuite telecharger la langue 
4. apres avoir telecharger, il faut dezipper le dossier 
5. ensuite, prendre les fichiers pour les langues et mettre dans le bon emplacement 
```
# Comment utiliser une icone en ligne 
```bash
1. partir sur la platefome lucide.
2. rechercher l icone puis cliquer dessus
3. en suite copier l url au format svg puis aller dans le code ouvrir une balise svg et mettre la source de l image copier au format svg
```
# Javascripts
## Comment declarer les variables et comment faire pour afficher a l ecran
*utiliser let pour declarer une variable
```bash
let nom="Tagne; 
let age= 12;
let bool = true;
```
*utiliser console.log pour afficher a l ecran 
```bash
console.log("hello word");
console.log(nom);
console.log("bonjour je m appele "+ nom + "
et je suis age de "+ age);
## Comment determiner le type d une variable 
*utiliser typeof pour determiner le type d une variable
```bash
console.log(typeof nom);
console.log(typeof age);
console.log(typeof bool);
```
## Comment eviter d utiliser le + pour concatener du texte et des variables
*utiliser `${...}`
```bash
console.log(`je m appele ${nom}`);
```
## Conditions 
### Conditions(if/else)
```bash
if(conditions){
  ...
}
else if(conditions){
  ...
}
else {
...
}
```