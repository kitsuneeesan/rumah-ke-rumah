import { home } from './rumahkerumah.js';
const fireworks = ['⠄', '⡢', '⢑', '⠈', '⠀', '⢀', '⣠', '⣤', '⡶', '⠞', '⠋', '⠁', '⠀', '⠈', '⠙', '⠳', '⣆', '⡀', '⠀', '⠆', '⡷', '⣹', '⢈', '⠀', '⠐', '⠪', '⢅', '⡀', '⠀'];
var fire_index = 0;

function startTime() {
    document.title = fireworks[fire_index];
    setTimeout(startTime, 200);
    fire_index++;
    if (fire_index == fireworks.length) {
        fire_index = 0
    }
}

async function getType() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('type');
}

function typewriter(message, paragraph_id) {
    var p = document.createElement('p');
    p.style.textAlign = 'center';
    p.setAttribute('id', paragraph_id);
    document.getElementById("main-card").appendChild(p);

    var index = 0;
    if (message === '') {
        document.getElementById(paragraph_id).innerHTML += '<br/>';
    }

    function writer() {
        if (index < message.length) {
            document.getElementById(paragraph_id).innerHTML += message.charAt(index);
            index++;
            setTimeout(writer, 100);
        }
    }

    writer();
}

async function displayMessage(type) {
    const currentDate = new Date().toLocaleDateString();
    const sheDate = home[type]?.toLocaleDateString();
    let message = "";
    if (sheDate) {
        if (currentDate === sheDate) {
            message = "Selamat Ulang Tahun!";
        } else {
            message = "It's not your birthday today!";
        }
    } else {
        message = "Wait a minute, Who are you?";
    }

    typewriter(message, 'paragraph-0');
}

window.onload = async () => {
    console.info("made with ❤️ by mas nan");
    startTime();
    const type = await getType();
    await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 second
    displayMessage(type);
}