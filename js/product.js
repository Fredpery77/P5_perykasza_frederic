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

const dataApi = fetch('http://localhost:3000/api/teddies/' + id);

dataApi.then(async (responseData) => {

  const response = await responseData.json();
  const section = document.querySelector('.image-du-produit');
  console.log(response);
  let name = response.name;
  let description = response.description;
  let imageUrl = response.imageUrl;
  let price = response.price;
  let colors = response.colors;
  console.log(colors);
  var html = '';

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

    html += `</select></form><a class="ajoutezAuPanier" href="./panier.html"><button id="btnAjoutezAuPanier">Ajoutez au panier</button></a>`
    + '</ul></section>';       
    
    section.innerHTML = html;
});



