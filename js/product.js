//-------------------- Affichage de la page produit -------------------------

/*const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
const imageDuProduit = document.querySelector('.image-du-produit');
const nomDuProduit = document.querySelector(".image-du-produit");
const descriptifDuProduit = document.querySelector(".image-du-produit");
const prixDuProduit = document.querySelector(".image-du-produit");
const colorsList = document.querySelector(".image-du-produit");


 const getIP = () => {

    fetch('http://localhost:3000/api/teddies/')
      .then(res => res.json())
      .then(res => {


        nomDuProduit.innerHTML = res.name;
        imageDuProduit.innerHTML = '<img src="' + res.imageUrl + '"/>';
        descriptifDuProduit.innerHTML = res.description;
        prixDuProduit.innerHTML = res.price/100  + ",00 €"; 
        colorsList.innerHTML += res.colors;
            
        });
}
getIP() */

// récupère tous les éléments------------------------

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

const dataApi = fetch('http://localhost:3000/api/teddies');

dataApi.then(async (responseData) => {

  const response = await responseData.json();
  const section = document.querySelector('.image-du-produit');

  let name = [];
  let description = [];
  let imageUrl = [];
  let price = [];
  let colors = [];
  let id = [];

  response.forEach((element, i) => {
    name[i] = element.name;
    imageUrl[i] = element.imageUrl;
    description[i] = element.description;
    price[i] = element.price;
    colors[i]= element.colors;
    id [i] = element.id;

    section.innerHTML += '<section id="#affichageduProduit"><ul>'
    + '<li><span id="productImage"><img class="image-nounours" src="' + imageUrl[i] + '"/> </span></li>'
    + '<li>Nom du produit : <span id="productName">' + name[i] + '</span></li>'
    + `<li>Description du Produit : <span id="productDescription">`+ description[i] + `</span></li>`
    + `<li>Prix :<span id="productPrice">` + price[i]/100 + ",00 €" + `</span></li>`
    + `<a class="ajoutezAuPanier" href="./panier.html"><button id="btnAjoutezAuPanier">Ajoutez au panier</button></a>`
    + '</ul></section>';                               
  });
});



