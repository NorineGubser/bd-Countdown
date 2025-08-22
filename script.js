document.addEventListener('DOMContentLoaded', () => {
  const countdownDiv = document.getElementById('countdown');
  const galleryDiv   = document.getElementById('gallery');
  const bgImageDiv   = document.getElementById('bg-image');

  // Sicherstellen: Countdown & kleines Bild sichtbar, Galerie versteckt
  countdownDiv.style.display = 'block';
  bgImageDiv.style.display   = 'flex';
  galleryDiv.style.display   = 'none';

  const pad = n => String(n).padStart(2, '0');

  function tick() {
    // Ziel: 07.01.2026, 00:00 (lokale Zeit)
    // Test: Countdown endet in 10 Sekunden
    var endDate = new Date(new Date().getTime() + 10 * 1000);


      // Countdown abgelaufen → Countdown & Bild aus, Galerie an
      countdownDiv.style.display = 'none';
      bgImageDiv.style.display   = 'none';
      galleryDiv.style.display   = 'block';
      return;
    }

    const days = Math.floor(diffSec / 86400);
    diffSec %= 86400;
    const hours   = Math.floor(diffSec / 3600);
    diffSec      %= 3600;
    const minutes = Math.floor(diffSec / 60);
    const seconds = diffSec % 60;

    countdownDiv.innerHTML =
      `Noch <b>${days}</b> Tage und <b>${pad(hours)}:${pad(minutes)}:${pad(seconds)}</b> bis zu deinem Geburtstag!`;

    setTimeout(tick, 1000);
  }

  tick();
});
