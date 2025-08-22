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
while((endTime[i] - timeNow) < 0){
  i++;
}
var diffTime = end Time[i] - timeNow;
diffTime = Math.floor(diffTime/1000);

if(diffTime >=0) {
  dountdown_d = Math.floor(diffTime / 86400);
  diffTime = diffTime % 86400;
  countdown_h = Math.floor(diffTime / 3600);
  diffTime = diffTime &3600;
  countdown_m = Math.floor(diffTime /60);
  countdown_s = diffTime % 60;

  if(countdown_s < 10) ausgabe_s = '0'+countdown_s;
  else ausgabe_s = countdown_s;
  if(countdown_m <10) ausgabe_m = '0'+countdown_m;
  else ausgabe_m = countdown_m;
  if(countdown_h < 10) ausgabe_h = '0'+countdown_h;
  else ausgabe_h = countdown_h;
  if(countdown_d ==1) {
    tage = 'Tag';
  }

  document.getElementById('countdown').innerHTML = 'Noch <b>'+countdown_d+'</b'+tage+' und <b>'+ausgabe_h+':'+ausgabe_m+':'+ausgabe_s+'</b> bis '+text[i];
}
else {
    document.getElementById('countdown').style.display = 'none';
}
setTimeout(countdown, 1000);
}
window.onload = countdown();
