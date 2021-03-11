//-----------------------------------récupère les données de l'API---------------------------


const imageDuProduit = document.querySelector('#productImage');
const nomDuProduit = document.querySelector("#productName");
const descriptifDuProduit = document.querySelector("#productDescription");
const prixDuProduit = document.querySelector("#productPrice");

const imageDuProduit2 = document.querySelector('#productImage2');
const nomDuProduit2 = document.querySelector("#productName2");
const descriptifDuProduit2 = document.querySelector("#productDescription2");
const prixDuProduit2 = document.querySelector("#productPrice2");

const imageDuProduit3 = document.querySelector('#productImage3');
const nomDuProduit3 = document.querySelector("#productName3");
const descriptifDuProduit3 = document.querySelector("#productDescription3");
const prixDuProduit3 = document.querySelector("#productPrice3");

const imageDuProduit4 = document.querySelector('#productImage4');
const nomDuProduit4 = document.querySelector("#productName4");
const descriptifDuProduit4 = document.querySelector("#productDescription4");
const prixDuProduit4 = document.querySelector("#productPrice4");

const imageDuProduit5 = document.querySelector('#productImage5');
const nomDuProduit5 = document.querySelector("#productName5");
const descriptifDuProduit5 = document.querySelector("#productDescription5");
const prixDuProduit5 = document.querySelector("#productPrice5");

const getIP = () => {

  fetch('http://localhost:3000/api/teddies')
    .then(res => res.json())
    .then(res => {
     console.log(res)
    
    nomDuProduit.innerHTML = res[0].name;
    imageDuProduit.innerHTML = '<img class="image-nounours" src="' + res[0].imageUrl + '"/>';
    descriptifDuProduit.innerHTML = res[0].description;
    prixDuProduit.innerHTML = res[0].price;  

    nomDuProduit2.innerHTML = res[1].name;
    imageDuProduit2.innerHTML = '<img class="image-nounours" src="' + res[1].imageUrl + '"/>';
    descriptifDuProduit2.innerHTML = res[1].description;
    prixDuProduit2.innerHTML = res[1].price;

    nomDuProduit3.innerHTML = res[2].name;
    imageDuProduit3.innerHTML = '<img class="image-nounours" src="' + res[2].imageUrl + '"/>';
    descriptifDuProduit3.innerHTML = res[2].description;
    prixDuProduit3.innerHTML = res[2].price;

    nomDuProduit4.innerHTML = res[3].name;
    imageDuProduit4.innerHTML = '<img class="image-nounours" src="' + res[3].imageUrl + '"/>';
    descriptifDuProduit4.innerHTML = res[3].description;
    prixDuProduit4.innerHTML = res[3].price;
  
    nomDuProduit5.innerHTML = res[4].name;
    imageDuProduit5.innerHTML = '<img class="image-nounours" src="' + res[4].imageUrl + '"/>';
    descriptifDuProduit5.innerHTML = res[4].description;
    prixDuProduit5.innerHTML = res[4].price;
    })
}
getIP()

   
   // Add event listeners on button

   document.getElementByName('btn').onclick = (event) => {
    event.preventDefault()
    
  } 