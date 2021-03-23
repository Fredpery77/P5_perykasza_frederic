
//Déclaration de la variable "produitEnregistreDansLocalStorage" dans laquelle on met les key et le values qui sont dans le local storage
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));

//-----------------------Affichage des produits du panier------------------------------------
// sélection de la classe pour injecter le HTML----------------------------------
const affichagePanier = document.querySelector("#commandeencours");



//----------------Si le panier est vide : afficher le panier est vide
if(produitEnregistreDansLocalStorage === null){
const panierVide =`
<div class="container-panier-vide">
<div> Le panier est vide</div>
</div>`;
affichagePanier.innerHTML = panierVide;

}else{
    // si le panier n'est pas vide : afficher le produit
let structureProduitPanier = [];
for (i = 0; i < produitEnregistreDansLocalStorage.length; i++ ){
    
    structureProduitPanier = structureProduitPanier + `
    <section id="commandeencours">
    <div id="affichageduProduit">
<table class="table">
    <thead>
        <tr>
            <th>Nom : ${produitEnregistreDansLocalStorage[i].name} </th>
            <th>Produit : <img class="image-nounours" src="${produitEnregistreDansLocalStorage[i].imageUrl}"/></th>
            <th>Prix : ${produitEnregistreDansLocalStorage[i].price} </th>
        </tr>
        </thead>
        </table>
            <form>
            <select id="productQuantity" name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            </form>
            </div>
    </section>
    `
    ;}

    if(i === produitEnregistreDansLocalStorage.length){
        //injection html dans la page panier
        affichagePanier.innerHTML =  structureProduitPanier;
    }
}


//-----------------------------Fin de l'affichage des produits dans le panier----------------

//-------------------------------------Le montant total dans le panier------------------
//Déclaration de la variable pour pouvoir y mettre les prix qui sont présents dans le panier---------
let prixTotalCalcul = [];

//----------------------Aller chercher les prix dans le panier-----------
for (let j = 0; j < produitEnregistreDansLocalStorage.length; j++){
    let prixProduitsDansLePanier = produitEnregistreDansLocalStorage[j].price;

    //Mettre les prix du panier dans la variable "prixTotalCalcul"
    prixTotalCalcul.push(prixProduitsDansLePanier)

}

//Additionner les prix qu'il y a dans le tableau de la variable "prixTotalCalcul" avec la méthode reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer);




 
