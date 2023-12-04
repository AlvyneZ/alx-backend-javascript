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
    (student) => ({
      ...student,
      newGrade: newGrades.find((grade) => grade.studentId === student.id)?.grade || 'N/A',
    }),
  );
}
