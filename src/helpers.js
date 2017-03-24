export function sort(arr, field, dir = 'asc') {
    const sorted = arr.sort((a, b) => {
        return dir === 'asc' ? a[field] > b[field] ? 1 : -1 : a[field] < b[field] ? 1 : -1;
    });
    return sorted;
}

export function lookup(arr, field, val) {
    let match;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][field] === val) {
            match = arr[i];
            break;
        }
    }
    return match;
}


export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function replaceChar(source, target, dest) {
    return source.replace(new RegExp(target, 'g'), dest);
}

export function getIndex(arr, field, val) {
    let arrIndex;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][field] === val) {
            arrIndex = i;
            break;
        }
    }
    return arrIndex;
}
