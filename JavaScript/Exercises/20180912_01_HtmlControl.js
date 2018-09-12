
/*
 * HTML
 * <h1>Digital Clock</h1>
 * <span id="clock"></span>
 */

function displayTime() {
	var elt = document.getElementById('clock');
 	var now = new Date();
 	elt.innerHTML = now.toLocaleTimeString();	// elt display
 	setTimeout(displayTime, 1000);				// replay in 1 sec.
}

window.onload = displayTime();

// -------------------------------------------------------------

