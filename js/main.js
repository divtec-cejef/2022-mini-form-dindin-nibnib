/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

console.log('Test liaison JS');
const backgroundSelector = document.getElementById("background");
backgroundSelector.addEventListener("change", () => {
	const background = backgroundSelector.value;
	const body = document.body;
	body.style.backgroundImage = `url(./img/backgrounds/${background})`;
});
