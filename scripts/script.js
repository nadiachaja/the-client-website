
/**wolkje verdwijnen als je op het kruisje likt */
var button = document.querySelector(".kruisje")
var cloud = document.querySelector(".wolkje")
button.addEventListener("click", function(){
   cloud.classList.add("hide")
})

/**text in wolkje dat de tijd veranderd na 12 uur en 18 uur */

// var today = new Date();
// var curHr = today.getHours();
// var text = document.querySelector(".wolkje span");

// if (curHr === 0) {
//     text.textContent = "Good night";

// } else if (curHr < 12) {
//     text.textContent = "Good morning";

// } else if (curHr < 18) {
//     text.textContent = "Good afternoon";

// } else {
//     text.textContent = "Good evening";
// }


// var today = new Date();
// var curHr = today.getHours();
// var greetingText = document.querySelector(".greeting");
// var subText = document.querySelector(".sub-text");

// if (curHr === 0) {
//     greetingText.textContent = "Good night";
//     subText.textContent = "It's time to sleep";
// } else if (curHr < 12) {
//     greetingText.textContent = "Good morning,";
//     subText.textContent = "Shall we start with a story?";
// } else if (curHr < 18) {
//     greetingText.textContent = "Good afternoon,";
//     subText.textContent = "Shall we start with a story?";
// } else {
//     greetingText.textContent = "Good evening,";
//     subText.textContent = "Shall we start with a story?";
// }


// var today = new Date();
// var curHr = today.getHours();
// var greetingText = document.querySelector(".greeting");
// var subText = document.querySelector(".sub-text");
// var lessonsLink = document.querySelector(".lessons");

// if (curHr === 0) {
//     greetingText.textContent = "Good night";
//     subText.textContent = "It's time to sleep";
//     lessonsLink.style.display = "none"; // Verberg de link
// } else if (curHr < 12) {
//     greetingText.textContent = "Good morning,";
//     subText.textContent = "Shall we start with a story?";
//     lessonsLink.style.display = "inline"; // Toon de link
// } else if (curHr < 18) {
//     greetingText.textContent = "Good afternoon,";
//     subText.textContent = "Hope you're having a great day!";
//     lessonsLink.style.display = "inline"; // Toon de link
// } else {
//     greetingText.textContent = "Good evening,";
//     subText.textContent = "How was your day?";
//     lessonsLink.style.display = "inline"; // Toon de link
// }


// var today = new Date();
// var curHr = today.getHours();
// var greetingText = document.querySelector(".greeting");
// var subText = document.querySelector(".sub-text");
// var lessonsLink = document.querySelector(".lessons");

// if (curHr === 0) {
//     greetingText.textContent = "Good night";
//     subText.textContent = "It's time to sleep";
//     lessonsLink.style.display = "none"; // Verberg de link
//     greetingText.classList.add("moved-down"); // Voeg de klasse toe voor de beweging
//     subText.classList.add("moved-down"); // Voeg de klasse toe voor de beweging
// } else if (curHr < 12) {
//     greetingText.textContent = "Good morning,";
//     subText.textContent = "Shall we start with a story?";
//     lessonsLink.style.display = "inline"; // Toon de link
//     greetingText.classList.remove("moved-down"); // Verwijder de klasse
//     subText.classList.remove("moved-down"); // Verwijder de klasse
// } else if (curHr < 18) {
//     greetingText.textContent = "Good afternoon,";
//     subText.textContent = "Hope you're having a great day!";
//     lessonsLink.style.display = "inline"; // Toon de link
//     greetingText.classList.remove("moved-down"); // Verwijder de klasse
//     subText.classList.remove("moved-down"); // Verwijder de klasse
// } else {
//     greetingText.textContent = "Good evening,";
//     subText.textContent = "How was your day?";
//     lessonsLink.style.display = "inline"; // Toon de link
//     greetingText.classList.remove("moved-down"); // Verwijder de klasse
//     subText.classList.remove("moved-down"); // Verwijder de klasse
// }


// var today = new Date();
// var curHr = today.getHours();
// var greetingText = document.querySelector(".greeting");
// var subText = document.querySelector(".sub-text");
// var lessonsLink = document.querySelector(".lessons");
// var goodnightMessage = document.querySelector(".goodnight-message"); 

// if (curHr === 0) {
//     greetingText.textContent = "Good night";
//     subText.textContent = "It's time to sleep";
//     goodnightMessage.textContent = "I see you tomorrow"; // Voeg de boodschap toe
//     goodnightMessage.style.display = "block"; // Toon de boodschap
//     lessonsLink.style.display = "none"; // Verberg de link
//     greetingText.classList.add("moved-down"); // Voeg de klasse toe voor de beweging
//     subText.classList.add("moved-down"); // Voeg de klasse toe voor de beweging

// } else if (curHr < 12) {
//     greetingText.textContent = "Good morning,";
//     subText.textContent = "Shall we start with a story?";
//     goodnightMessage.style.display = "none"; // Verberg de boodschap
//     lessonsLink.style.display = "inline"; // Toon de link
//     greetingText.classList.remove("moved-down"); // Verwijder de klasse
//     subText.classList.remove("moved-down"); // Verwijder de klasse

// } else if (curHr < 18) {
//     greetingText.textContent = "Good afternoon,";
//     subText.textContent = "Hope you're having a great day!";
//     goodnightMessage.style.display = "none"; // Verberg de boodschap
//     lessonsLink.style.display = "inline"; // Toon de link
//     greetingText.classList.remove("moved-down"); // Verwijder de klasse
//     subText.classList.remove("moved-down"); // Verwijder de klasse

// } else {
//     greetingText.textContent = "Good evening,";
//     subText.textContent = "How was your day?";
//     goodnightMessage.style.display = "none"; // Verberg de boodschap
//     lessonsLink.style.display = "inline"; // Toon de link
//     greetingText.classList.remove("moved-down"); // Verwijder de klasse
//     subText.classList.remove("moved-down"); // Verwijder de klasse
// }


var today = new Date();
var curHr = today.getHours();
var greetingText = document.querySelector(".greeting");
var subText = document.querySelector(".sub-text");
var lessonsLink = document.querySelector(".lessons");
var goodnightMessage = document.querySelector(".goodnight-message"); // Nieuwe variabele

if (curHr >= 0 && curHr < 6) { // Tussen 0 en 5 (6 uur is niet inbegrepen)
    greetingText.textContent = "Good night";
    subText.textContent = "It's time to sleep";
    goodnightMessage.innerHTML = "I see you <span class='purple'>tomorrow</span>"; // Voeg de boodschap toe met een span
    goodnightMessage.style.display = "block"; // Toon de boodschap
    lessonsLink.style.display = "none"; // Verberg de link
    greetingText.classList.add("moved-down"); // Voeg de klasse toe voor de beweging
    subText.classList.add("moved-down"); // Voeg de klasse toe voor de beweging

} else if (curHr < 12) {
    greetingText.textContent = "Good morning,";
    subText.textContent = "Shall we start with a story?";
    goodnightMessage.style.display = "none"; // Verberg de boodschap
    lessonsLink.style.display = "inline"; // Toon de link
    greetingText.classList.remove("moved-down"); // Verwijder de klasse
    subText.classList.remove("moved-down"); // Verwijder de klasse

} else if (curHr < 18) {
    greetingText.textContent = "Good afternoon,";
    subText.textContent = "Shall we start with a story?";
    goodnightMessage.style.display = "none"; // Verberg de boodschap
    lessonsLink.style.display = "inline"; // Toon de link
    greetingText.classList.remove("moved-down"); // Verwijder de klasse
    subText.classList.remove("moved-down"); // Verwijder de klasse
    
} else {
    greetingText.textContent = "Good evening,";
    subText.textContent = "Shall we start with a story?";
    goodnightMessage.style.display = "none"; // Verberg de boodschap
    lessonsLink.style.display = "inline"; // Toon de link
    greetingText.classList.remove("moved-down"); // Verwijder de klasse
    subText.classList.remove("moved-down"); // Verwijder de klasse
}