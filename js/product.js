//-------------------- Affichage de la page produit -------------------------

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
const imageDuProduit = document.querySelector('#productImage');
const nomDuProduit = document.querySelector("#productName");
const descriptifDuProduit = document.querySelector("#productDescription");
const prixDuProduit = document.querySelector("#productPrice");
const colorsList = document.querySelector("#productColor");


 const getIP = () => {

    fetch('http://localhost:3000/api/teddies/')
      .then(res => res.json())
      .then(res => {

        const colorsArray = res.colors;

        nomDuProduit.innerHTML = element.name;
        imageDuProduit.innerHTML = '<img src="' + element.imageUrl + '"/>';
        descriptifDuProduit.innerHTML = element.description;
        prixDuProduit.innerHTML = element.price/100  + ",00 €"; 
        colorsArray.forEach(element => {
            colorsList.innerHTML += element;
            colorsList.innerHTML += '<div' + element + ';"></div>';
        });

    })
}
getIP()

