interface Window { getUrlParam(message: string): void; }
declare var window: Window;

interface Dictionary {
    [key: string]: any
}

window.getUrlParam = (url: string) => {
    'use strict';
    let return_json: Dictionary = {};

    if (typeof url !== 'string' || url.match(/\?/g) === null) {
        return return_json;
    }

    const query_array = url.split('?')[1].split('&');

    query_array.forEach((item)=>{
        const key = item.split('=')[0];
        const value = item.split('=')[1];
        if (key.match(/\[\]/g) !== null) {
            const insert_destination = return_json[key];
            if (typeof return_json[key] !== 'object') {
                return_json[key] = []
            }
            return_json[key].push(value);
        } else {
            return_json[key] = value;
        }
    });

    return return_json;
}