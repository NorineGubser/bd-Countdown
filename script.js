function countdown() {
  var tage = 'Tage';
  var countdown_d, countdown_h, countdown_m, countdown_s;
  var ausgabe_s, ausgabe_m, ausgabe_h;
  var endTime = [];
  var text = [];
  var i = 0;

  endTime[0] = new Date(2026, 1, 7, 0, 0, 0);
  text[0] = 'zum 18. Geburtstag!';

  var timeNow = new Date();
  while ((endTime[i] - timeNow) < 0) {
    i++;
    if(i >= endTime.length) break; // Sicherheit, falls kein Datum mehr
  }

  if(i >= endTime.length){
    document.getElementById('countdown').style.display = 'none';
    return;
  }

  var diffTime = endTime[i] - timeNow;
  diffTime = Math.floor(diffTime / 1000);

  if(diffTime >= 0) {
    countdown_d = Math.floor(diffTime / 86400);
    diffTime = diffTime % 86400;
    countdown_h = Math.floor(diffTime / 3600);
    diffTime = diffTime % 3600; // korrigiert: & → %

    countdown_m = Math.floor(diffTime / 60);
    countdown_s = diffTime % 60;

    ausgabe_s = (countdown_s < 10) ? '0' + countdown_s : countdown_s;
    ausgabe_m = (countdown_m < 10) ? '0' + countdown_m : countdown_m;
    ausgabe_h = (countdown_h < 10) ? '0' + countdown_h : countdown_h;

    if(countdown_d == 1) {
      tage = 'Tag';
    }

    document.getElementById('countdown').innerHTML = 
      'Noch <b>' + countdown_d + '</b> ' + tage + 
      ' und <b>' + ausgabe_h + ':' + ausgabe_m + ':' + ausgabe_s + '</b> bis ' + text[i];
  } else {
    document.getElementById('countdown').style.display = 'none';
  }

  setTimeout(countdown, 1000);
}

window.onload = countdown;
