document.addEventListener('DOMContentLoaded', function() {

  function countdown() {
    // Enddatum: 7. Januar 2026, 00:00 Uhr lokale Zeit
    var endDate = new Date(2026, 0, 7, 0, 0, 0); // Januar = 0

    var now = new Date(); // lokale Zeit

    var diff = Math.floor((endDate - now) / 1000);

    var countdownDiv = document.getElementById('countdown');
    var galleryDiv = document.getElementById('gallery');

    if (!countdownDiv || !galleryDiv) {
      console.error('Countdown oder Galerie Div nicht gefunden!');
      return;
    }

    if (diff <= 0) {
      countdownDiv.style.display = 'none';
      galleryDiv.style.display = 'block';
      return;
    }

    var days = Math.floor(diff / 86400);
    diff %= 86400;
    var hours = Math.floor(diff / 3600);
    diff %= 3600;
    var minutes = Math.floor(diff / 60);
    var seconds = diff % 60;

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    var tageText = (days === 1) ? 'Tag' : 'Tage';

    countdownDiv.innerHTML = 
      'Noch <b>' + days + '</b> ' + tageText + 
      ' und <b>' + hours + ':' + minutes + ':' + seconds + '</b> bis zum Geburtstag!';

    setTimeout(countdown, 1000);
  }

  countdown();

});
