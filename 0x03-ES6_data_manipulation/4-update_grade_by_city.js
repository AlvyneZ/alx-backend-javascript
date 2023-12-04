export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!(studentsList instanceof Array)) {
    return [];
  }
  if (!(newGrades instanceof Array)) {
    return studentsList.filter(
      (student) => (student.location === city),
    ).map(
      (student) => ({ ...student, newGrade: 'N/A' }),
    );
  }
  return studentsList.filter(
    (student) => (student.location === city),
  ).map(
    (student) => {
      const stGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
      return {
        ...student,
        newGrade: stGrade ? stGrade.grade : 'N/A',
      };
    },
  );
}
