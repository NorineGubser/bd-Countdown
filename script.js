document.addEventListener('DOMContentLoaded', () => {
  const countdownDiv = document.getElementById('countdown');
  const galleryDiv = document.getElementById('gallery');

  // 07.01.2026 00:00 CET  ==  06.01.2026 23:00:00 UTC
  const endUtcMs = Date.UTC(2026, 0, 6, 23, 0, 0);

  const pad = n => String(n).padStart(2, '0');

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
