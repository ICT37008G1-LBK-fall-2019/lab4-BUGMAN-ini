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

function countNames(list) {
    let difList = {};
    for (let i = 0; i < list.length; i++) {
        let key = list[i].name;
        if (difList[key] == null)
            difList[key] = 0;
        difList[key]++;
    }
    return difList;
}

console.log(countNames(students));