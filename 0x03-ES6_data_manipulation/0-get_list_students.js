function Student(id, firstName, location) {
  return { id, firstName, location };
}

export default function getListStudents() {
  return [
    Student(1, 'Guillaume', 'San Francisco'),
    Student(2, 'James', 'Columbia'),
    Student(5, 'Serena', 'San Francisco'),
  ];
}
