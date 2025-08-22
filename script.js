document.addEventListener('DOMContentLoaded', () => {
  const countdownDiv = document.getElementById('countdown');
  const galleryDiv = document.getElementById('gallery');

  function tick() {
    // Zielzeit: 7. Januar 2026, 00:00 Uhr **lokale Zeit**
    const endDate = new Date(2026, 0, 7, 0, 0, 0); 
    const now = new Date();

    // Differenz in Sekunden
    let diffSec = Math.floor((endDate.getTime() - now.getTime()) / 1000);

    if (diffSec <= 0) {
      countdownDiv.style.display = 'none';
      galleryDiv.style.display = 'block';
      return;
    }

    const days = Math.floor(diffSec / 86400);
    diffSec %= 86400;
    const hours = Math.floor(diffSec / 3600);
    diffSec %= 3600;
    const minutes = Math.floor(diffSec / 60);
    const seconds = diffSec % 60;

    // Formatierung
    const pad = (n) => String(n).padStart(2, '0');
    const tageText = (days === 1) ? 'Tag' : 'Tage';

    countdownDiv.innerHTML =
      `Noch <b>${days}</b> ${tageText} und <b>${pad(hours)}:${pad(minutes)}:${pad(seconds)}</b> bis zum Geburtstag!`;

    setTimeout(tick, 1000);
  }

  tick();
});
