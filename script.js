document.addEventListener('DOMContentLoaded', () => {
  const countdownDiv = document.getElementById('countdown');
  const galleryDiv = document.getElementById('gallery');
  const bgImageDiv = document.getElementById('bg-image');

  // Galerie & Bild am Anfang verstecken
  galleryDiv.style.display = 'none';

  function tick() {
    const endDate = new Date(2026, 0, 7, 0, 0, 0); // 07.01.2026 00:00
    const now = new Date();

    let diffSec = Math.floor((endDate.getTime() - now.getTime()) / 1000);

    if (diffSec <= 0) {
      countdownDiv.style.display = 'none';
      bgImageDiv.style.display = 'none';   // Bild verschwindet mit Countdown
      galleryDiv.style.display = 'block';
      return;
    }

    const days = Math.floor(diffSec / 86400);
    diffSec %= 86400;
    const hours = Math.floor(diffSec / 3600);
    diffSec %= 3600;
    const minutes = Math.floor(diffSec / 60);
    const seconds = diffSec % 60;

    const pad = n => String(n).padStart(2, '0');

    countdownDiv.innerHTML =
      `Noch <b>${days}</b> Tage und <b>${pad(hours)}:${pad(minutes)}:${pad(seconds)}</b> bis zu deinem Geburtstag!`;

    setTimeout(tick, 1000);
  }

  tick();
});
