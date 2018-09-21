/*global console*/

function getUrlParam(url) {
	'use strict';
	let return_json = {};

	if (typeof url !== 'string' || url.match(/\?/g) === null) {
		return return_json;
	}

	const query_array = url.split('?')[1].split('&');
	let i = 0;
	while (i < query_array.length) {
		const key = query_array[i].split('=')[0];
		const value = query_array[i].split('=')[1];
		return_json[key] = value;
		i++;
	}
	return return_json;
}
