interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [x: string]: unknown;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string) {
  return `${firstName.slice(0,1)}. ${lastName}`;
};

interface StudentConfig {
  firstName: string;
  lastName: string;
}

interface Student extends StudentConfig {
  workOnHomework: () => string;
  displayName: () => string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor (config: StudentConfig) {
    this.firstName = config.firstName;
    this.lastName = config.lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher('John', 'Doe'));

const student: Student = new StudentClass({
  firstName: 'Carl',
  lastName: 'Iba',
});
console.log(student);
console.log(student.workOnHomework());
console.log(student.displayName());
