//-----------------------------------récupère les données de l'API---------------------------
const dataApi = fetch('http://localhost:3000/api/teddies');

dataApi.then(async (responseData) => {

  const response = await responseData.json();
  const section = document.querySelector('.liste-nounours');
  
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
     
    section.innerHTML += '<section class="carteNounours"><ul>'
    + '<li><span id="productImage"><img class="image-nounours" src="' + imageUrl[i] + '"/> </span></li>'
    + '<li>Nom du produit : <span id="productName">' + name[i] + '</span></li>'
    + `<li>Description du Produit : <span id="productDescription">`+ description[i] + `</span></li>`
    + `<li>Prix :<span id="productPrice">` + price[i]/100 + ",00 €" + `</span></li>`
    + `<a href="./products.html?=${id[i]}"><button>Voir le produit</button></a>`
    + '</ul></section>';                               
  });
});



