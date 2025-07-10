var use24 = false;

function updateTime() {
  var now = new Date();
  var hr = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var amorpm = "AM";

  if (!use24) {
    if (hr >= 12) amorpm = "PM";
    hr = hr % 12 || 12;
  }

  var h = hr < 10 ? "0" + hr : hr;
  var m = min < 10 ? "0" + min : min;
  var s = sec < 10 ? "0" + sec : sec;

  document.getElementById("time").textContent = h + ":" + m + ":" + s;
  document.getElementById("amorpm").textContent = use24 ? "" : amorpm;
  document.getElementById("date").textContent = now.toDateString();
}

setInterval(updateTime, 1000);
updateTime();

document.getElementById("switchFormat").onclick = function () {
  use24 = !use24;
  this.textContent = use24 ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format";
  updateTime();
};
