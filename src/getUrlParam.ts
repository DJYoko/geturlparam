import Dictionary from './interface/Dictionary';

interface Window { getUrlParam(message: string): void; }
declare var window: Window;

window.getUrlParam = function (url: string): Object {
    'use strict';
    let return_json: Dictionary = {};

    if (typeof url !== 'string' || url.match(/\?/g) === null) {
        return return_json;
    }

    const query_array = url.split('?')[1].split('&');

    query_array.forEach((item)=>{
        const key = item.split('=')[0];
        const value = item.replace(key + '=', '').split('#')[0];
        if (key.match(/\[\]/g) !== null) {
            const insert_destination = return_json[key];
            if (typeof return_json[key] !== 'object') {
                return_json[key] = [];
            }
            return_json[key].push(value);
        } else {
            return_json[key] = value;
        }
    });

    return return_json;
}
