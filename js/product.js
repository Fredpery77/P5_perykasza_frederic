//-------------------- Affichage de la page produit -------------------------

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

const dataApi = fetch('http://localhost:3000/api/teddies/' + id);

dataApi.then(async (responseData) => {

  const response = await responseData.json();
  const section = document.querySelector('.image-du-produit');
  
  let name = response.name;
  let description = response.description;
  let imageUrl = response.imageUrl;
  let price = response.price;
  let colors = response.colors;
  var html = '';

  //------------------------injecter la structure HTML pour affichage du produit------------

    html += '<section id="#affichageduProduit"><ul>'
    + '<li><span id="productImage"><img class="image-nounours" src="' + imageUrl + '"/> </span></li>'
    + '<li>Nom du produit : <span id="productName">' + name + '</span></li>'
    + `<li>Description du Produit : <span id="productDescription">`+ description + `</span></li>`
    + `<li>Prix :<span id="productPrice">` + price/100 + ",00 €" + `</span></li>`
    + `<li>Couleurs : </li></span>`
    + `<form><select id="productQuantity" name="quantity" id="quantity">`;

    colors.forEach(function(color){
      html += `<option value="` + color + `">` + color + `</option>`;
    });




    html += `</select></form><a class="ajoutezAuPanier"><button id="btnAjoutezAuPanier">Ajoutez au panier</button></a>`
    + '</ul></section>';       
    
    section.innerHTML = html;


const envoyerPanier = document.querySelector("#btnAjoutezAuPanier");



envoyerPanier.addEventListener("click", (event) => {
  event.preventDefault();

  let produitDansLePanier = {
    nomProduit: productName.name,
    price: productPrice.price/100 +",00 €",
  }
  let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));

if (produitEnregistreDansLocalStorage) {

}
else {
  produitEnregistreDansLocalStorage = [];
  produitEnregistreDansLocalStorage.push(produitDansLePanier);
  localStorage.setItem("produit", JSON.stringify(produitEnregistreDansLocalStorage));
console.log(produitEnregistreDansLocalStorage);
}

})
});






//-----------------Gestion d'un panier---------------
/* function initBasket(){
  let basket = localStorage.getItem("basket");
  if(basket != null){
    return JSON.parse(basket);
  }else {
    return [];
  }
}
  function addToBasket(product){
    let basket = initBasket();
    basket.push(product)
    saveBasket(basket);
  }
  function saveBasket(basket){
    JSON.stringify(localStorage.setItem("basket",basket));
  } */
