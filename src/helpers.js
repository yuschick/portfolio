export function sort(arr, field) {
    const sorted = arr.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
    });
    return sorted;
}

export function titleToUrl(title) {
    return title;
}
