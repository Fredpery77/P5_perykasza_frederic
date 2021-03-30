//-----------------------------------récupère les données de l'API---------------------------
const dataApi = fetch('http://localhost:3000/api/teddies');

dataApi.then(async (responseData) => {

  const response = await responseData.json();
  const section = document.querySelector('.toutes-les-cartes');
 
  // La boucle pour afficher tous les produits dans la page web
  response.forEach((element,) => {
    name = element.name;
    imageUrl = element.imageUrl;
    description = element.description;
    price = element.price;
    colors= element.colors;
    id = element._id;
    //Afficher tous les produits sur la page web
     
    section.innerHTML += '<section class="carteNounours"><ul>'
    + '<li><span id="productImage"><img class="image-nounours" src="' + element.imageUrl + '"/> </span></li>'
    + '<li>Nom du produit : <span id="productName">' + element.name + '</span></li>'
    + `<li>Description du Produit : <span id="productDescription">`+ element.description + `</span></li>`
    + `<li>Prix :<span id="productPrice">` + element.price/100 + ",00 €" + `</span></li>`
    + `<a href="./products.html?id=${element._id}"><button>Voir le produit</button></a>`
    + '</ul></section>';                               
  });
});



