/*global console*/

function getUrlParam(url) {
	'use strict';
	var return_json = {};

	if (typeof url !== 'string' || url.match(/\?/g) === null) {
		return return_json;
	}

	var query_part = url.split('?')[1];
	var query_array = query_part.split('&');

	console.log(query_array);
}
