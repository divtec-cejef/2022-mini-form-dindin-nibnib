/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

console.log('Test liaison JS');
const backgroundSelector = document.getElementById("background");
const form = document.querySelector("form");
backgroundSelector.addEventListener("change", () => {
	const background = backgroundSelector.value;
	const body = document.body;
	body.style.backgroundImage = `url(./img/backgrounds/${background})`;
});
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const submitButton = form.querySelector('button[type="submit"]');
	submitButton.classList.add("animate__animated", "animate__heartBeat");
	alert("Compte enregistré !");
	console.log("ran");
});
