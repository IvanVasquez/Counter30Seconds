var millis = 30000;
var sec, secs, mil, m, sp;
sec = 30;
secs = 30;
mil = 60;
function displaytimer(){
  if(secs > 0){
    secs = Math.floor((millis % 100000) / 1000);
    if (sec<10) {sec="0"+secs;} 
    else sec = secs;
    mil = (millis / 1000).toFixed(2);
    sp = mil.split(".");
    m = sp[1];
    if(secs < 10){ document.getElementById('count').innerHTML = '<div style="color: orange;">' + sec + ':' + m + '</div>';
                 }
    else{
    document.getElementById('count').innerHTML = sec + ':' + m;   
    }
  }
  else{
    if(mil > 0){
       mil = (millis / 1000).toFixed(2);
       sp = mil.split(".");
       m = sp[1];
      document.getElementById('count').innerHTML = '<div style="color: red;">' + sec + ':' + m + '</div>';    
    }
  }
}

setInterval(function(){
    millis -= 10;
    displaytimer();
}, 10);