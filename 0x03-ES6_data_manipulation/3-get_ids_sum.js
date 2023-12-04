export default function getStudentIdsSum(studentsList) {
  if (!(studentsList instanceof Array)) {
    return [];
  }
  return studentsList.reduce((acc, value) => (acc + Number(value.id)), 0);
}
