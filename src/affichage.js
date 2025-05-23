function affiche(divId) {
    const test = document.getElementsByClassName('view');
    for (let i = 0; i < test.length; i++) {
        test[i].style.display = 'none';
    };
    document.getElementById(divId).style.display = 'block';
}

affiche('accueil');

document.getElementById("year").textContent = new Date().getFullYear();


