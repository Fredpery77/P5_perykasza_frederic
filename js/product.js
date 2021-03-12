//-------------------- Récupérer l'id dans l'URL -------------------------/////
function getId() {
    const param = window.location.search;
    const id = param.replace("?id=",""); // Retire ?ID= des paramètres de l'URL, récupère uniquement l'identifiant
    return id;
}

