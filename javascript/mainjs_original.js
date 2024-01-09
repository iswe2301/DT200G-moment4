"use strict";

// Variabler
let menuBtnEl = document.querySelector(".menubtn");
let containerEl = document.querySelector("div");
let video1 = document.getElementById("product-video1");
let video2 = document.getElementById("product-video2");

// Händelselyssnare vid klick somm anropar funktioner
menuBtnEl.addEventListener("click", transformMenu);
menuBtnEl.addEventListener("click", dropDownMenu);

// Hämtar aktuell sökväg
let currentPage = window.location.pathname;

// Om aktuell sökväg slutar med cup1-sidan läggs händelselyssnare till
if (currentPage.endsWith('/cup1.html')) {
    // Händelselyssnare som vid inläsning av metadata anropar funktion
    video1.addEventListener("loadedmetadata", showVideoPoster1)
}

// Om aktuell sökväg slutar med coffee1-sidan läggs händelselyssnare till
if (currentPage.endsWith('/coffee1.html')) {
    // Händelselyssnare som vid inläsning av metadata anropar funktion
    video2.addEventListener("loadedmetadata", showVideoPoster2)
}

// Funktion för att besöka produktsidan till senast besökta sida
function goToProducts() {
    window.location.href = "products.html";
}

// Funktion för att växla mellan klassen cross samt opacity vid klick.
// Hämtar element genom class.
function transformMenu() {
    let menuiconEl = document.querySelector(".menuicon")
    menuiconEl.classList.toggle("cross");
    containerEl.classList.toggle("opacity");
}

// Funktion för att växla mellan att visa och dölja länkar i navigering när hamburgermenyn klickas.
function dropDownMenu() {
    // Hämtar element genom ID till länkarna.
    let mobilenavEl = document.getElementById("mobilenav");
    let style = window.getComputedStyle(mobilenavEl);
    // Kontroll om menyn visas som block, döljer länkar & visar menytext
    if (style.display === "block") {
        mobilenavEl.style.display = "none";
    } else {
        // Om meny inte visas som block (display: none), visar block vid klick och döljer menytext
        mobilenavEl.style.display = "block";
    }
}

// Funktion för att visa video-poster, webm/mp4 beroende på videokälla
function showVideoPoster1() {
    // Hämtar aktuell videokälla
    let videoSource = video1.currentSrc;
    // Deklarerar variabel för poster
    let poster;
    // Om videon läses in i mp4-format visas jpg bilden
    if (videoSource.includes("productvideo.mp4")) {
        poster = "images/poster1.jpg";
        // Om videon läses in i webm format visas webp bilden
    } else if (videoSource.includes("productvideo.webm")) {
        poster = "images/poster1.webp";
    }
    // Sätter poster som attribut på videon
    video1.setAttribute("poster", poster);
}

// Funktion för att visa video-poster, webm/mp4 beroende på videokälla
function showVideoPoster2() {
    // Hämtar aktuell videokälla
    let videoSource = video2.currentSrc;
    // Deklarerar variabel för poster
    let poster;
    // Om videon läses in i mp4-format visas jpg bilden
    if (videoSource.includes("productvideo.mp4")) {
        poster = "images/poster2.jpg";
        // Om videon läses in i webm format visas webp bilden
    } else if (videoSource.includes("productvideo.webm")) {
        poster = "images/poster2.webp";
    }
    // Sätter poster som attribut på videon
    video2.setAttribute("poster", poster);
}