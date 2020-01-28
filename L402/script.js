function countByName(list, firstName) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].name == firstName)
            count++;
    }
    return count;
}

let students = [
    { id: 1, name: 'Tamari' },
    { id: 2, name: 'Giorgi' },
    { id: 3, name: 'Tamari' },
    { id: 4, name: 'Nodari' },
    { id: 5, name: 'Tamari' },
    { id: 6, name: 'Nodari' },
    { id: 7, name: 'Tamari' },
    { id: 8, name: 'Mariami' },
];

let name1 = 'Tamari';
let name2 = 'Nodari';

console.log(countByName(students, name1));
console.log(countByName(students, name2));