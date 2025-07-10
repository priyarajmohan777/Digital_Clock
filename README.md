# Digital_Clock
## Date:10-07-2025
## Objective:
To create a live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels.

## Tasks:

#### 1. Create the HTML Structure:
Use a ```<div>``` with an ID like clock to hold the time display.

Add a page title like ```<h1>TimeTrack</h1>```.

Optionally, include a subtitle like “Live Digital Clock”.

#### 2. Style the Clock with CSS:
Center the clock using flexbox or text-align: center.

Use a large font size (e.g., font-size: 48px) for the clock display.

Style with a dark background and light-colored text for contrast.

Use padding, border-radius, and box-shadow for a modern look.

#### 3. Add JavaScript Functionality:
Create a function that gets the current time using new Date().

Extract hours, minutes, and seconds from the date object.

Format them to two digits using .padStart(2, "0").

Update the inner text of the clock div every second using setInterval().

#### 4. Enhancements:
Display AM/PM next to the time.

Add the current date below the time.

Let the user choose between 12-hour and 24-hour formats.

Animate the colon (:) blinking every second.

Add a “Tweet this” button with a share link.

## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Live Digital Clock</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main>
    <h1>Time Tracker</h1>
    <p class="subtitle">Live Digital Clock</p>

    <p class="time-display" id="time">--:--:--</p>
    <p id="amorpm"></p>
    <p id="date">--</p>
    <button id="switchFormat">Switch to 24-Hour Format</button>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

## CSS Code:
```
body {
  background-color: #f4f4f9;
  color: #222;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  background-color: #ffffff;
  padding: 25px 35px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

h1 {
  margin: 0;
  font-size: 26px;
}

.subtitle {
  font-size: 14px;
  color: #555;
  margin-bottom: 25px;
  margin-top: 5px;
}

.time-display {
  font-size: 42px;
  font-weight: 600;
  margin: 10px 0;
  color: #1e1e2f;
}

#amorpm {
  font-size: 16px;
  margin-top: 5px;
  color: #333;
}

#date {
  font-size: 15px;
  color: #666;
  margin-top: 10px;
}

button {
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: #2e5a88;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #3b6ca5;
}

```

## JS Code:
```
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

```
## Output:
<img width="1919" height="1006" alt="image" src="https://github.com/user-attachments/assets/57e88bdb-ff7c-46c5-a68c-86847d37c63a" />


## Result:
A live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels is created successfully.
