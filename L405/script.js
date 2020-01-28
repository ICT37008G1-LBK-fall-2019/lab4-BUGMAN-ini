let students = [
    { id: 1, name: 'Tamari', gpa: 2.1 },
    { id: 2, name: 'Giorgi', gpa: 1.1 },
    { id: 3, name: 'Tamari', gpa: 3.1 },
    { id: 4, name: 'Nodari', gpa: 2.7 },
    { id: 5, name: 'Tamari', gpa: 1.9 },
    { id: 6, name: 'Nodari', gpa: 3.4 },
    { id: 7, name: 'Tamari', gpa: 3.6 },
    { id: 8, name: 'Mariami', gpa: 2.5 },
];

function averageGpa(list, compGpa = 2) {
    let gpaSum = 0;
    let gpaCount = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i].gpa >= compGpa) {
            gpaSum += list[i].gpa;
            gpaCount++;
        }
    }

    return gpaSum / gpaCount;
}

console.log(averageGpa(students, 3));
console.log(averageGpa(students));