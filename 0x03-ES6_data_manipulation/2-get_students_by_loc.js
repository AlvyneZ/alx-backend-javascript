export default function getStudentsByLocation(studentsList, location) {
  if (!(studentsList instanceof Array)) {
    return [];
  }
  return studentsList.filter((student) => (student.location === location));
}
