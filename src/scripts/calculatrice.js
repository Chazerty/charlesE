let ecran = document.getElementById('ecran');
let valeurActuelle = '0';
let valeurPrecedente = '0';

function MaJecran() {
    ecran.textContent = valeurActuelle;
}
        
function ajoutEcran(valeur) {
    if (valeurActuelle === '0' && valeur !== '.') {
        valeurActuelle = valeur;
    } else {
        const lastChar = valeurActuelle.slice(-1);
        const operateurs = ['+', '-', '*', '/'];
        
        if (operateurs.includes(valeur) && operateurs.includes(lastChar)) {
            valeurActuelle = valeurActuelle.slice(0, -1) + valeur;
        } else {
            valeurActuelle += valeur;
        }
    }
    MaJecran();
}

function Ans() {
            if (valeurActuelle === '0') {
                valeurActuelle = valeurPrecedente;
            } else {
                valeurActuelle += valeurPrecedente;
            }
            MaJecran();
        }

function clearEcran() {
    valeurActuelle = '0';
    MaJecran();
}

function retirer() {
    if (valeurActuelle.length > 1) {
        valeurActuelle = valeurActuelle.slice(0, -1);
    } else {
        valeurActuelle = '0';
    }
    MaJecran();
}

function calculer() {
    try {
        const expression = valeurActuelle.replace(/×/g, '*');
        
        const result = new Function('return ' + expression)();
        
        if (Number.isInteger(result)) {
            valeurActuelle = result.toString();
        } else {
            valeurActuelle = result.toFixed(8).replace(/\.?0+$/, '');
        }
        valeurPrecedente = valeurActuelle;
        MaJecran();
    } catch (error) {
        valeurActuelle = 'Error';
        MaJecran();
        setTimeout(clearEcran, 1500);
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        ajoutEcran(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        ajoutEcran(key);
    } else if (key === '.') {
        ajoutEcran('.');
    } else if (key === 'Enter' || key === '=') {
        calculer();
    } else if (key === 'retirer') {
        retirer();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearEcran();
    }
});