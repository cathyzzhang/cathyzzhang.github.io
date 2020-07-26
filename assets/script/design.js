/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}


//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
//

function unhideLightbox1() {
	unhideLightbox("design1");
}
// TODO: Set the browser to run the function unhideLightbox1 when someone clicks #picture-1
document.getElementById('picture-1').onclick = unhideLightbox1;

// TODO: do the same for #picture-2, write a function and then make it run on click
function unhideLightbox2() {
	unhideLightbox("design2");
}
document.getElementById('picture-2').onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("design3");
}
document.getElementById('picture-3').onclick = unhideLightbox3;

function unhideLightbox4() {
	unhideLightbox("design4");
}
document.getElementById('picture-4').onclick = unhideLightbox4;

function unhideLightbox5() {
	unhideLightbox("design5");
}
document.getElementById('picture-5').onclick = unhideLightbox5;

function unhideLightbox6() {
	unhideLightbox("design6");
}
document.getElementById('picture-6').onclick = unhideLightbox6;

function unhideLightbox7() {
	unhideLightbox("design7");
}
document.getElementById('picture-7').onclick = unhideLightbox7;

function unhideLightbox8() {
	unhideLightbox("design8");
}
document.getElementById('picture-8').onclick = unhideLightbox8;

function unhideLightbox9() {
	unhideLightbox("design9");
}
document.getElementById('picture-9').onclick = unhideLightbox9;

function unhideLightbox10() {
	unhideLightbox("design10");
}
document.getElementById('picture-10').onclick = unhideLightbox10;

function unhideLightbox11() {
	unhideLightbox("design11");
}
document.getElementById('picture-11').onclick = unhideLightbox11;

function unhideLightbox12() {
	unhideLightbox("design12");
}
document.getElementById('picture-12').onclick = unhideLightbox12;

function unhideLightbox13() {
	unhideLightbox("design13");
}
document.getElementById('picture-13').onclick = unhideLightbox13;

//
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
//
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');
	// TODO: Add the .hidden class to the div with the given id

}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;
