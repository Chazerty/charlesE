function changeTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); // Pour persister le choix de l'utilisateur
}

// Restaurer le thème au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'retro'){
      document.getElementById('theme-retro').checked = true;
    }
    else if (savedTheme === 'caramellatte'){
      document.getElementById('theme-caramellatte').checked = true;
    }
    else if (savedTheme === 'nord'){
      document.getElementById('theme-nord').checked = true;
    }
  }
  else {
    document.getElementById('theme-retro').checked = true;
  }
});

