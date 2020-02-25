"use strict";

const notANumber = /\D/g;
const phoneSegments = /(\d{3})(\d{2})(\d{7})/;

module.exports = function ( phoneString ) {
	const phoneStringJustNumbers = phoneString.replace(notANumber, '');
	const [tel, country, area, local] = phoneStringJustNumbers.match(phoneSegments);
	return {
		tel,
		country,
		area,
		local
	}
};