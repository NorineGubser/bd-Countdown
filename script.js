function countdown() {
  console.log("Countdown läuft!"); // <-- Test
  var endDate = new Date(2026, 0, 7, 0, 0, 0); // Jahr, Monat-1, Tag, Stunde, Minute, Sekunde
  var now = new Date();
  var diff = Math.floor((endDate - now) / 1000); // Differenz in Sekunden

  if(diff <= 0){
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('gallery').style.display = 'block'; // Galerie einblenden
    return;
  }

  var days = Math.floor(diff / 86400);
  diff %= 86400;
  var hours = Math.floor(diff / 3600);
  diff %= 3600;
  var minutes = Math.floor(diff / 60);
  var seconds = diff % 60;

  // führende Nullen
  hours = (hours < 10) ? '0'+hours : hours;
  minutes = (minutes < 10) ? '0'+minutes : minutes;
  seconds = (seconds < 10) ? '0'+seconds : seconds;

  var tageText = (days == 1) ? 'Tag' : 'Tage';
  document.getElementById('countdown').innerHTML = 
    'Noch <b>' + days + '</b> ' + tageText + 
    ' und <b>' + hours + ':' + minutes + ':' + seconds + '</b> bis zum Geburtstag!';

  setTimeout(countdown, 1000);
}

countdown(); // einfach direkt aufrufen


