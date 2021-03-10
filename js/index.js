//-----------------------------------récupère les données de l'API---------------------------

const quote = document.querySelector('#quote');

const getIP = () => {

  fetch('http://localhost:3000/api/teddies')
    .then(res => res.json())
    .then(res => {
     console.log(res)

      quote.innerHTML = res[0].imageUrl;
    })
}
getIP()