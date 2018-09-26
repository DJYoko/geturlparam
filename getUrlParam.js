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
		if (key.match(/\[\]/g) !== null) {
			if (typeof return_json[key] === 'undefined') {
				return_json[key] = []
			}
			return_json[key].push(value)
		} else {
			return_json[key] = value;
		}

		i++;
	}
	return return_json;
}
