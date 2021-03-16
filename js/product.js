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

    fetch('http://localhost:3000/api/teddies/' + id)
      .then(res => res.json())
      .then(res => {

        const colorsArray = res.colors;

        nomDuProduit.innerHTML = res.name;
        imageDuProduit.innerHTML = '<img class="image-du-produit" src="' + res.imageUrl + '"/>';
        descriptifDuProduit.innerHTML = res.description;
        prixDuProduit.innerHTML = res.price/100  + ",00 €"; 
        colorsArray.forEach(element => {
            colorsList.innerHTML += element;
            colorsList.innerHTML += '<div' + element + ';"></div>';
        });

    })
}
getIP()