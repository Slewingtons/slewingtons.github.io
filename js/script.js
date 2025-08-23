// Attempt to initialise the content warning.
var cw = document.getElementById("cw");

// Show content warning if it exists.
if (cw !== null) {
	// Allow the user to click through the content warning.
	cw.addEventListener("click", hideCW);
	
	// Do not show the content warning if the URL hash is #cw.
	if (window.location.hash !== "#cw") {
		cw.style.visibility = "visible";
		cw.classList.remove("fallback");
	}
}

// Hide the content warning.
function hideCW() {
	if (cw !== null) {
		cw.style.visibility = "hidden";

		// Add the URL hash #cw.
		history.replaceState(null, "", "#cw");
	}
}