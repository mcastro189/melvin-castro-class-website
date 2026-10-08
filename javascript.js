let phoneOn = false;

let button = document.getElementById("powerButton");
let onScreen = document.getElementById("on");
let offScreen = document.getElementById("off");
let time = document.getElementById("time");
let date = document.getElementById("date");

function turnPhoneOn() {

    phoneOn = !phoneOn;

    if (phoneOn == true) {

        onScreen.style.display = "block";
        offScreen.style.display = "none";

        let now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (hours > 12) {
            hours = hours - 12;
        }

        if (hours == 0) {
            hours = 12;
        }

        time.innerHTML = hours + ":" + minutes;
        date.innerHTML = now.toDateString();

    } else {

        onScreen.style.display = "none";
        offScreen.style.display = "block";

    }
}

button.addEventListener("click", turnPhoneOn);