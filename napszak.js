$( document ).ready(function() {

day = new Date()
hr = day.getHours()
hr1 = hr

if (hr < "11") {
//*document.getElementById('ide').innerHTML= "Menj aludni!! Hajnali " +hr+ " óra van. Ez még túl korai!";*//
  document.getElementById('udv').innerHTML= "Jó reggelt";
}

else if (hr < "18") {
document.getElementById('udv').innerHTML= "Szép napot";
}

else if (hr < "23") {
document.getElementById('udv').innerHTML= "Szép estét";
}

});