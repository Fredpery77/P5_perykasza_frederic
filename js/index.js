//------------------------Mettre les données sur la page index.html--------------------------------------------------
//---------------------------------PRODUIT---------------------------------------------------------------------------

// déclaration de variable
let _id = [];
let productName = [];
let productDescription = [];
let productLink = [];
let productPrice = [];
let structureProduct = "";
let i = [];

//-----------------------------------fonction qui va afficher les produits dans la page web automatiquement-------------------------

function affichageProduits(response) {
    // sélection élément du DOM
    const positionElement = document.querySelector("container-page-produit");

// la boucle pour afficher tous les objets dans la page web--------------
for (i = 0; i < response.length; i++) {
//---------------mettre les données dans les variables--------------------------------
response.forEach((element, i) => { 
    _id [i] = element._id;
    productName [i] = element.productName;
    productDescription [i] = element.productDescription;
    productLink [i] = element.productLink;
    productPrice [i] = element.productPrice;
});
//--------------------afficher tous les objets sur la page web---------------------------------------
structureProduct = structureProduct + `
<a href="./products.html?${_id[i]}">
<div class="mise-en-page-produit">
  <div class="image_photo>
    <img src="${productLink [i]}">
  </div>
  <div class="products">
   <ul>
     <li> Nom produit : <span>${productName[i]}</span></li>
     <li> Description : <span></span>${productDescription [i]}</li>
     <li> Prix : <span>${productPrice [i]}</span></li>
   </ul>
   <button>Commander l'article</button>
   </div>
</div>
</a>
`;
//---------------------------injection HTML--------------------------
positionElement.innerHTML = structureProduct;
}
}
//----------------------affichageProduits(response);
window.onload = () => {
    affichageProduits(response);
};