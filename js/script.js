// Attempt to initialise the content warning.
var cw = document.getElementById("cw");

// Set content warning visibility if it exists.
if (cw !== null) {
	// Allow the user to click through the content warning.
	cw.addEventListener("click", hideCW);
	
	// Only show the content warning if the URL hash is not #cw.
	if (window.location.hash !== "#cw") {
		cw.style.visibility = "visible";
	} else {
		cw.style.visibility = "hidden";
	}
	
	// Remove the no-JS fallback.
	cw.classList.remove("fallback");
}

// Hide the content warning.
function hideCW() {
	if (cw !== null) {
		cw.style.visibility = "hidden";

		// Add the URL hash #cw.
		history.replaceState(null, "", "#cw");
	}
}