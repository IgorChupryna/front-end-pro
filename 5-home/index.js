const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]
averageStudentMark(10); // id === 10
averageGroupMark(students);

function averageStudentMark(id) {
    let student = students.find(item => item.id === id);
    let marks = student.marks;
    return marks.reduce((acc, currentValue, index) => {
        const nextNumberSum = acc + currentValue;
        if (index === marks.length - 1) {
            return nextNumberSum / marks.length;
        }
        return nextNumberSum;
    });
}

function averageGroupMark(obj) {
    let ids = obj.map(el => el.id);

    return ids.reduce((acc, currentValue, index) => {
        const nextNumberSum = acc + averageStudentMark(currentValue);
        if (index === ids.length - 1) {
            return nextNumberSum / ids.length;
        }
        return nextNumberSum;
    }, 0);
}