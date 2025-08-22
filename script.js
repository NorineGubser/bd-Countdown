document.addEventListener('DOMContentLoaded', function() {

  function countdown() {
    // Enddatum lokal: 7. Januar 2026, 00:00 Uhr
    var endDate = new Date(2026, 0, 7, 0, 0, 0);

    var now = new Date(); // aktuelle lokale Zeit
    var diff = endDate.getTime() - now.getTime(); // Differenz in Millisekunden

    if (diff <= 0) {
      document.getElementById('countdown').style.display = 'none';
      document.getElementById('gallery').style.display = 'block';
      return;
    }

    // Sekunden, Minuten, Stunden, Tage berechnen
    var totalSeconds = Math.floor(diff / 1000);
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    // führende Nullen
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    var tageText = (days === 1) ? 'Tag' : 'Tage';

    document.getElementById('countdown').innerHTML =
      'Noch <b>' + days + '</b> ' + tageText +
      ' und <b>' + hours + ':' + minutes + ':' + seconds + '</b> bis zum Geburtstag!';

    setTimeout(countdown, 1000);
  }

  countdown();

});
