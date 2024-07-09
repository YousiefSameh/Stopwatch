var displayTime = document.getElementById("stopwatch");
var Timer = 0;
var Intervalid = null;


function StartTime() {
  if (!Intervalid) {
    Intervalid = setInterval(function () {
      Timer++;
      var Hours = Math.floor(Timer / 3600);
      var Minutes = Math.floor((Timer % 3600) / 60);
      var Seconds = Timer % 60;
      displayTime.innerHTML = `${AddZero(Hours)}:${AddZero(Minutes)}:${AddZero(Seconds)}`;
    }, 1000)
  }
}

function StopTime() {
  clearInterval(Intervalid);
  Intervalid = null;
}

function ResetTime() {
  Timer = 0;
  displayTime.innerHTML = "00:00:00";
  StopTime();
}

function AddZero(Number) {
  return (Number < 10 ? "0" : "") + Number;
}