// countdown.js

document.addEventListener('DOMContentLoaded', function() {

  function countdown() {
    // Enddatum: 22. August 2026
    var endDate = new Date(2026, 7, 22, 0, 0, 0); // Monat 0-basiert: 7 = August
    var now = new Date();
    var diff = Math.floor((endDate - now) / 1000); // Differenz in Sekunden

    var countdownDiv = document.getElementById('countdown');
    var galleryDiv = document.getElementById('gallery');

    // Sicherheitscheck: Elemente existieren
    if (!countdownDiv || !galleryDiv) {
      console.error('Countdown oder Galerie Div nicht gefunden!');
      return;
    }

    if (diff <= 0) {
      // Countdown abgelaufen → Galerie anzeigen
      countdownDiv.style.display = 'none';
      galleryDiv.style.display = 'block';
      return;
    }

    // Berechnung Tage, Stunden, Minuten, Sekunden
    var days = Math.floor(diff / 86400);
    diff %= 86400;
    var hours = Math.floor(diff / 3600);
    diff %= 3600;
    var minutes = Math.floor(diff / 60);
    var seconds = diff % 60;

    // führende Nullen
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // Plural für Tag(e)
    var tageText = (days === 1) ? 'Tag' : 'Tage';

    countdownDiv.innerHTML = 
      'Noch <b>' + days + '</b> ' + tageText + 
      ' und <b>' + hours + ':' + minutes + ':' + seconds + '</b> bis zum Geburtstag!';

    // Countdown jede Sekunde aktualisieren
    setTimeout(countdown, 1000);
  }

  // Countdown starten
  countdown();

});
