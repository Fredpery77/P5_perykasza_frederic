
document.querySelector('#form').addEventListener('submit', function (e){
    var cp = document.querySelector('#codepostal')
    if (cp.value.length != 5) {
     alert('Le code postal n\'est pas bon')
     e.preventDefault()
    }
})