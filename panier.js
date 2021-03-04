
function initNounours(){
    var nounours = localStorage.getItem("nounours");
    if(nounours != null){
        return JSON.parse(nounours);
    }else {
        return [];
    }
}
/* récupère le panier et ajoute un produit */
function addToNounours(product){
    var nounours = initNounours();

    /* récupère le produit */
    var product = basket.find(product => product.id == id);
     /* if () si le produit existe déjà on ajoute un à la quantité et sinon on crée le produit et on met une quatité à un */
    produit.quantity = 1  /* ajoute une proprièté à l'objet produit avec la valeur à 1 s'il existe on rajoute 1++ à quantity */
    basket.push(product);
    saveNounours(nounours);
}

/* retire un produit du panier */
function removeFromNounours(product){

}


function saveNounours(nounours){
    localStorage.setItem("nounours",JSON.stringify(nounours));
}