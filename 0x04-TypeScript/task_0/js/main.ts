interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: 'Anne',
    lastName: 'Onimas',
    age: 20,
    location: 'Kisumu',
  },
  {
    firstName: 'Mark',
    lastName: 'Mende',
    age: 21,
    location: 'Nairobi',
  },
];

// Vanilla JS for rendering a table with the firstNames and locations of each student
const table = document.createElement('table');

const rowHead = document.createElement('tr');
const nameColHead = document.createElement('th');
const locationColHead = document.createElement('th');
nameColHead.textContent = 'First Name';
locationColHead.textContent = 'Location';
rowHead.appendChild(nameColHead);
rowHead.appendChild(locationColHead);
table.appendChild(rowHead);

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const nameCol = document.createElement('td');
    const locationCol = document.createElement('td');

    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;

    nameCol.style.paddingRight = '100px';
    nameCol.style.border = '1px solid black';
    locationCol.style.paddingRight = '100px';
    locationCol.style.border = '1px solid black';

    row.appendChild(nameCol);
    row.appendChild(locationCol);
    table.appendChild(row);
});
document.body.appendChild(table);
