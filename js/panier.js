
document.querySelector('#form').addEventListener('submit', function (e){
    var cp = document.querySelector('#codepostal')
    if (cp.value.length != 5) {
     alert('Le code postal n\'est pas bon')
     e.preventDefault()
    }
})
 const positionElement = document.querySelector(".commandeencours");
//------------------------------La gestion du panier----------------------------
//--------------------- la récupération des données sélectionnées par l'utilisateur et envoie du panier----------
const structureProduit =`
<section class="commandeencours">
    <h2>Votre panier</h2>
    <div id="affichageduProduit">
<table class="table">
    <thead>
        <tr>
            <th>Produit : <span></span></th>
            <th>Quantité : <span></span></th>
            <th>Prix : <span></span></th>
        </tr>
        </thead>
        </table>
            <form>
            <select id="productQuantity" name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            </form>
            <button id="btn-validation-commande">Valider votre commande</button>
            </div>
    </section>
    `
    ;

    positionElement.innerHTML = structureProduit;





