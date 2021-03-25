
//Déclaration de la variable "produitEnregistreDansLocalStorage" dans laquelle on met les key et le values qui sont dans le local storage
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));

//-----------------------Affichage des produits du panier------------------------------------
// sélection de la classe pour injecter le HTML----------------------------------
const affichagePanier = document.querySelector("#commandeencours");



//----------------Si le panier est vide : afficher le panier est vide
if (produitEnregistreDansLocalStorage === null) {
    const panierVide = `
<div class="container-panier-vide">
<div> Le panier est vide </div>
</div>`;
    affichagePanier.innerHTML = panierVide;

} else {
    // si le panier n'est pas vide : afficher le produit
    let structureProduitPanier = [];
    for (i = 0; i < produitEnregistreDansLocalStorage.length; i++) {

        structureProduitPanier +=  `
<section id="commandeencours">
    <div id="affichageduPanier">
        <table class="table">
            <thead>
                <tr>
                    <th><span id="nomDansLePanier">Nom : ${produitEnregistreDansLocalStorage[i].name}</span> </th>
                    <th><span id="imageDansLePanier"><img class="image-nounours" src="${produitEnregistreDansLocalStorage[i].imageUrl}"/></span></th>
                    <th><span id="prixDansLePanier">Prix : ${produitEnregistreDansLocalStorage[i].price/100},00 € </span></th>
                </tr>
            </thead>
        </table>
    </div>
</section>
    `
            ;
    }
   
        
        //injection html dans la page panier
        affichagePanier.innerHTML = structureProduitPanier;
    }



//-----------------------------Fin de l'affichage des produits dans le panier----------------

//-------------------------------------Le montant total dans le panier------------------
//Déclaration de la variable pour pouvoir y mettre les prix qui sont présents dans le panier---------
let prixTotalCalcul = [];

//----------------------Aller chercher les prix dans le panier-----------
for (let j = 0; j < produitEnregistreDansLocalStorage.length; j++) {
    let prixProduitsDansLePanier = produitEnregistreDansLocalStorage[j].price;

    //Mettre les prix du panier dans la variable "prixTotalCalcul"
    prixTotalCalcul.push(prixProduitsDansLePanier)

}

//Additionner les prix qu'il y a dans le tableau de la variable "prixTotalCalcul" avec la méthode reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer, 0);

// Le code HTML du prix total à afficher
const affichagePrixHtml = `
<div class="affichage-prix-total-html">Le prix total est de : ${prixTotal/100},00 € </div>
`

//injection html dans la page panier après le dernier enfant
affichagePanier.insertAdjacentHTML("beforeend", affichagePrixHtml);

//-----------------------------------------------FIN - Le montant total du panier-------------------------------

