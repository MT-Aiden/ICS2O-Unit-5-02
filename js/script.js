//Made by: Aiden McLeod
//Made in: March 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-HTML/sw.js", {
    scope: "/ICS2O-Unit5-03-HTML/",
  })
}

/**
 * Finds if the user can watch a R, PG-13, or G rated movie alone with the age group the user selected.
 */
function onButtonClick() {
  const seventeenorover = document.getElementById("seventeenorover").checked
  const thirteentosixteen = document.getElementById("thirteentosixteen").checked
  const twelveorunder = document.getElementById("twelveorunder").checked

  if (seventeenorover == true) {
    document.getElementById("result").innerHTML = "<h5>You can watch R, PG-13, or G rated movies alone.</h5>"
  } else if (thirteentosixteen == true) {
    document.getElementById("result").innerHTML = "<h5>You can watch PG-13 or G rated movies alone.</h5>"
  } else if (twelveorunder == true) {
    document.getElementById("result").innerHTML = "<h5>You can watch a G rated movie alone.</h5>"
  } else {
    document.getElementById("result").innerHTML = "<h5>Please enter a proper age group.</h5>"
  }
}