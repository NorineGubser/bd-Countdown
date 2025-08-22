document.addEventListener('DOMContentLoaded', () => {
  const countdownDiv = document.getElementById('countdown');
  const galleryDiv = document.getElementById('gallery');

  if (!countdownDiv || !galleryDiv) {
    console.error('countdown oder gallery nicht gefunden.');
    return;
  }

  // 2026-01-07 00:00 in Europe/Zurich  ≙  2026-01-06 23:00:00 UTC
  const endUtcMs = Date.parse('2026-01-06T23:00:00Z'); // absoluter Zeitpunkt

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    let diffSec = Math.floor((endUtcMs - Date.now()) / 1000);

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

    const tageText = (days === 1) ? 'Tag' : 'Tage';
    countdownDiv.innerHTML =
      `Noch <b>${days}</b> ${tageText} und <b>${pad(hours)}:${pad(minutes)}:${pad(seconds)}</b> bis zum Geburtstag!`;

    setTimeout(tick, 1000);
  }

  tick();
});
