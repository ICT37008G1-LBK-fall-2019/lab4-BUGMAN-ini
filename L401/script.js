function min(n1, n2, n3) {
    let min = n1;
    if (n2 < min)
        min = n2;
    if (n3 < min)
        min = n3;
    return min;
}

console.log(min(1, 2, 3));
console.log(min(2, 1, 3));
console.log(min(3, 2, 1));