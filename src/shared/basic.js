/*
This file is part of Talkie -- text-to-speech browser extension button.
<https://github.com/joelpurra/talkie>

Copyright (c) 2016, 2017 Joel Purra <https://joelpurra.com/>

Talkie is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Talkie is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Talkie.  If not, see <https://www.gnu.org/licenses/>.
*/

const shallowCopy = (...objs) => Object.assign({}, ...objs);

const last = (indexable) => indexable[indexable.length - 1];

const flatten = (deepArray) => {
    if (!Array.isArray(deepArray)) {
        return deepArray;
    }

    if (deepArray.length === 0) {
        return [];
    }

    if (deepArray.length === 1) {
        return [].concat(flatten(deepArray[0]));
    }

    return [].concat(flatten(deepArray[0])).concat(flatten(deepArray.slice(1)));
};

const isUndefinedOrNullOrEmptyOrWhitespace = (str) => !(str && typeof str === "string" && str.length > 0 && str.trim().length > 0);

const getRandomInt = (min, max) => {
    if (typeof min === "undefined") {
        min = Number.MIN_VALUE;
        max = Number.MAX_VALUE;
    }

    if (typeof max === "undefined") {
        max = min;
        min = 0;
    }

    if (max === min) {
        return min;
    }

    if (min > max) {
        const t = min;
        min = max;
        max = t;
    }

    return min + Math.floor(Math.random() * (max - min));
};
