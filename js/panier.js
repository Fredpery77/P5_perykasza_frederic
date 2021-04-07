
//Déclaration de la variable "produitEnregistreDansLocalStorage" dans laquelle on met les key et le values qui sont dans le local storage
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("products"));

//-----------------------Affichage des produits du panier------------------------------------
// sélection de la classe pour injecter le HTML----------------------------------
const affichagePanier = document.querySelector("#commandeencours");


//----------------Si le panier est vide : afficher le panier est vide
if (produitEnregistreDansLocalStorage === null) {
    const panierVide = `
<div class="container-panier-vide">
<div> Le panier est vide </div>
</div>`;
    affichagePanier.innerHTML = panierVide;


} else {
    // si le panier n'est pas vide : afficher les produits dans le localStorage
    let structureProduitPanier = [];
    for (i = 0; i < produitEnregistreDansLocalStorage.length; i++) {

        structureProduitPanier += `
   
    <section id="commandeencours">
    <div id="affichageduPanier">
        <table class="table">
            <thead>
                <tr>
                    <th><span id="nomDansLePanier">Nom : ${produitEnregistreDansLocalStorage[i].name}</span> </th>
                    <th><span id="imageDansLePanier"><img class="image-nounours" src="${produitEnregistreDansLocalStorage[i].imageUrl}"/></span></th>
                    <th><span id="prixDansLePanier">Prix : ${produitEnregistreDansLocalStorage[i].price / 100},00 € </span></th>
                </tr>
            </thead>
        </table>
    </div>
</section>
    `;
    }

    //injection html dans la page panier
    affichagePanier.innerHTML = structureProduitPanier;
}


//-----------------------------Fin de l'affichage des produits dans le panier----------------

//-------------------------------------Le montant total du panier------------------
//Déclaration de la variable pour pouvoir y mettre les prix qui sont présents dans le panier---------
let prixTotalCalcul = [];

//----------------------Aller chercher les prix dans le panier-----------
for (let j = 0; j < produitEnregistreDansLocalStorage.length; j++) {
    let prixProduitsDansLePanier = produitEnregistreDansLocalStorage[j].price;

    //Mettre les prix du panier dans la variable "prixTotalCalcul"
    prixTotalCalcul.push(prixProduitsDansLePanier)
}

//Additionner les prix qu'il y a dans le tableau de la variable "prixTotalCalcul" avec la méthode reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer, 0);

// Le code HTML du prix total à afficher
const affichagePrixHtml = `
<div class="affichage-prix-total-html">Le prix total est de : ${prixTotal / 100},00 € </div>
`

//injection html dans la page panier après le dernier enfant
affichagePanier.insertAdjacentHTML("beforeend", affichagePrixHtml);

//-----------------------------------------------FIN - Le montant total du panier-------------------------------

//*********************************************************Le formulaire de commande**************************/

const afficherFormulaireHtml = () => {
    //Sélection élément du DOM pour le positionnement du formulaire
    const positionFormulaire = document.querySelector("#commandeencours");

    const structureFormulaire = `
    <div id="formulaireCommande">
        <h2>Remplissez le formulaire pour valider la commande</h2>
    
    
        <form>
            <label for="firstName"> Prénom :</label>
            <input type="text" id="firstName" name="firstName" required>
    
            <label for="lastName"> Nom : </label>
            <input type="text" id="lastName" name="lastName" required>
    
            <label for="address"> Adresse : </label>
            <textarea id="address" name="address" required>
            </textarea>
    
            <label for="city"> Ville : </label>
            <input type="text" id="city" name="city" required>
    
            <label for="codePostal"> Code Postal : </label>
            <input type="text" id="codePostal" name="codePostal" required>
    
            <label for="email"> E-mail : </label>
            <input type="text" id="email" name="email" required>
    
            <button id="envoyerFormulaire" type="submit" name="envoyerFormulaire">
                Confirmation de la commande
            </button>
        </form>
    </div>`; 

   //injection HTML
    positionFormulaire.insertAdjacentHTML("afterend", structureFormulaire);
};

//Affichage du formulaire
afficherFormulaireHtml(); 

//Sélection du bouton envoyer le formulaire
const btnEnvoyerFormulaire = document.querySelector("#envoyerFormulaire");


//addEnventlistnener
btnEnvoyerFormulaire.addEventListener("click", (e) => {
    e.preventDefault();
    

    //Récupération des valeurs du formulaire
    const contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        codePostal: document.querySelector("#codePostal").value,
        email: document.querySelector("#email").value
    }

    //**************************************GESTION VALIDATION DU FORMULAIRE************************/
    const textAlert = (value) => {
        return `${value} : Chiffre et symbole ne sont pas autorisé \n Ne pas dépasser 20 caractères, minimum 3 caratères`;
    };
console.log(textAlert);
    const regExPrenomNomVille = (value) => {
        return /^[A-Za-z-\s]{3,20}$/.test(value);
    };
    const regExCodePostal = (value) => {
        return /^[0-9]{5}$/.test(value);
    };
    const regExEmail = (value) => {
        return /^[\w-\.]+@([\w-]+\.)[a-z]{2,4}$/.test(value);
    };
    const regExAdresse = (value) => {
        return /^[A-Za-z0-9-\s]{5,50}$/.test(value);
    };
    const regExVille = (value) => {
        return /^[A-Za-z0-9-\s]{5,50}$/.test(value);
    };

    function prenomControle() {
        //Contrôle de la validité du prenom
        const lePrenom = contact.firstName;
        if (regExPrenomNomVille(lePrenom)) {
            return true;
        } else {
            alert(textAlert("Prénom"));
            return false;
        }
    };

    function nomControle() {
        //Contrôle de la validité du nom
        const leNom = contact.lastName;
        if (regExPrenomNomVille(leNom)) {
            return true;
        } else {
            alert(textAlert("Nom"));
            return false;
        }
    };
    function codePostalControle() {
        //Contrôle de la validité du code postal
        const leCodePostal = contact.codePostal;
        if (regExCodePostal(leCodePostal)) {
            return true;
        } else {
            alert("Code Postal : doit être composé de 5 chiffres");
            return false;
        }
    };
    function emailControle() {
        //Contrôle de la validité de l'email
        const leEmail = contact.email;
        if (regExEmail(leEmail)) {
            return true;
        } else {
            alert("L'email n'est pas valide");
            return false;
        }
    };
    function adresseControle() {
        //Contrôle de la validité de l'addresse
        const leAdresse = contact.address;
        if (regExAdresse(leAdresse)) {
            return true;
        } else {
            alert("L'adresse doit contenir que des lettres sans ponctuation et des chiffres");
            return false;
        }
    };
        function cityControle() {
            //Contrôle de la validité de la ville
            const laVille = contact.city;
            if (regExVille(laVille)) {
                return true;
            } else {
                alert("La ville doit contenir que des lettres sans ponctuation et des chiffres");
                return false;
            }
        };

    //Contrôle la validité du formulaire avant envoie dans le local storage
    if (prenomControle() && nomControle() && codePostalControle() && emailControle() && adresseControle() && cityControle() ) {
        //Mettre l'objet "contact" dans le local storage
        localStorage.setItem("contact", JSON.stringify(contact));
        let products = [];

        produitEnregistreDansLocalStorage.forEach(element => {
            products.push(element.id)
        });
        
        fetch('http://localhost:3000/api/teddies/order', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contact, products })
        }).then(res => res.json())
            .then(res => window.location.href = "commande.html?orderId=" + res.orderId);
        
    } else {
        alert("Veuillez bien remplir le formulaire");
        
    };

    //---------------------FIN----GESTION VALIDATION DU FORMULAIRE------------------------------------------------

    //Mettre les valeurs du formulaire et mettre les produits sélectionnés dans un objet à envoyer vers le serveur
})









