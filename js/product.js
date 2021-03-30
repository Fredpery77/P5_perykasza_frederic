//-------------------- Affichage de la page produit -------------------------

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

const dataApi = fetch('http://localhost:3000/api/teddies/' + id);
console.log(dataApi);
dataApi.then(async (responseData) => {

  const response = await responseData.json();
  const section = document.querySelector('.image-du-produit');
  
  let name = response.name;
  let description = response.description;
  let imageUrl = response.imageUrl;
  let price = response.price;
  let colors = response.colors;
  let html = '';

  //------------------------injecter la structure HTML pour affichage du produit------------

  html += '<section id="#affichageduProduit"><ul>'
    + '<li><span id="productImage"><img class="image-nounours" src="' + imageUrl + '"/> </span></li>'
    + '<li>Nom du produit : <span id="productName">' + name + '</span></li>'
    + `<li>Description du Produit : <span id="productDescription">` + description + `</span></li>`
    + `<li>Prix :<span id="productPrice">` + price / 100 + ",00 €" + `</span></li>`
    + `<li>Couleurs : </li></span>`
    + `<form><select id="productQuantity" name="quantity" id="quantity">`;

  colors.forEach(function (color) {
    
    html += `<option value="` + color + `">` + color + `</option>`;
  });




  html += `</select></form><a class="ajoutezAuPanier"><button id="btnAjoutezAuPanier">Ajoutez au panier</button></a>`
    + '</ul></section>';

  section.innerHTML = html;


  const envoyerPanier = document.querySelector("#btnAjoutezAuPanier");



  envoyerPanier.addEventListener("click", (event) => {
    event.preventDefault();

    let produitDansLePanier = {
      imageUrl: response.imageUrl,
      name: response.name,
      price: response.price,
      id: response._id
    }

    //--------------------------------Le Local Storage---------------------------------------
    //--------------------------Stocker les valeurs du bouton dans le local storage------------


    //Déclaration de la variable "produitEnregistreDansLocalStorage" dans laquelle on met les key et le values qui sont dans le local storage
    let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("products"));
    
    //---------JSON.parse c'est pour convertir les données au format JSON qui sont dans le local storage en objet JavaScript

    //----------------Foncion fenêtre pop up--------------
    const popupConfirmation = () => {
      if (window.confirm(`${response.name} a bien été ajouté au panier
  Consultez le panier OK ou continuez vos achats ANNULER`)) {
        window.location.href = "panier.html";
      }
      else {
        window.location.href = "index.html";
      }
    }
    
    //Fonction ajouter un produit sélectionné dans le localStorage
    const ajoutProduitLocalStorage = () => {

      //ajout dans le tableau de l'objet avec les values choisies par l'utilisateur----------
      produitEnregistreDansLocalStorage.push(produitDansLePanier);

      //la transformation en format JSON et l'envoyer dans la key "produit" du localStorage
      localStorage.setItem("products", JSON.stringify(produitEnregistreDansLocalStorage));
    };

    // SI il a déjà des produits d'enregistrés dans le local storage
    if (produitEnregistreDansLocalStorage) {
      ajoutProduitLocalStorage();
      popupConfirmation();

      // SI il n'y a pas de produits enregistrés dans le local storage
    }
    else {
      produitEnregistreDansLocalStorage = [];
      ajoutProduitLocalStorage();
      popupConfirmation();

    }

  })
});






