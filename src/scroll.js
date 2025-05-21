window.onscroll = () => {
  const scroll = window.scrollY;
  const text = document.getElementById('scrollText');
  
  if (scroll <= 300) {
    // Phase de grossissement (0-300px de scroll)
    const scale = 1 + scroll/600;
    text.style.transform = `scale(${scale})`;
    text.style.opacity = 1;
  } else {
    // Phase d'ascension (>300px de scroll)
    const scale = 1.5; // Maintient la taille maximale
    const moveUpAmount = (scroll - 300) * 0.5; // Vitesse de montée
    
    text.style.transform = `scale(${scale}) translateY(-${moveUpAmount}px)`;
    text.style.opacity = 1; // Reste visible
  }
};

window.onload = () => {
  document.body.style.minHeight = '3000px';
  window.onscroll();
};