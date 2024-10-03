
/**wolkje verdwijnen als je op het kruisje likt */
var button = document.querySelector(".kruisje")
var cloud = document.querySelector(".wolkje")
button.addEventListener("click", function(){
   cloud.classList.add("hide")
})

/**text in wolkje dat de tijd veranderd na 12 uur en 18 uur */
var today = new Date()
var curHr = today.getHours() 
var text = document.querySelector(".wolkje span")

if (curHr <12){
    text.textContent = "Good morning"
}

else if (curHr <18){
    text.textContent = "Good afternoon"
}

else {
   text.textContent = "Good evening"
}