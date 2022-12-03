class Student {
    name;
    marks = [];

    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getAverageMark() {
        return this.getMarksSum() / this.marks.length;
    }

    getMarksSum() {
        return sum(this.marks);
    }
}

class Group {
    #students = [];

    addStudent(student) {
        if (this.isStudent(student)) {
            this.#students.push(student);
        }
    }

    isStudent(student) {
        return student instanceof Student;
    }

    getAverageMark() {
        return this.getAverageMarksSum() / this.#students.length;
    }

    getAverageMarksSum() {
        let sum = 0;
        for (const student of this.#students) {
            sum += student.getAverageMark();
        }
        return sum;
    }
}

function sum(arrNums) {
    return arrNums.reduce((sum, a) => sum + a, 0);
}


const group = new Group();

group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8
group.addStudent({}); // игнорируем добавлениие невалидных данных


// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);


Array.prototype.max = function (){
    return Math.max.apply(null, this);
}
console.log([7, 6, 5, 8].max()); // 8
