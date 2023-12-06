interface Student {
  firstName:string,
  lastName:string,
  age:number,
  location:string
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
let table = document.createElement('table');
let tableBody = document.createElement('tbody');

table.style.border = '1px solid black';

studentsList.forEach(student => {
    let row = document.createElement('tr');
    let nameCol = document.createElement('td');
    let locationCol = document.createElement('td');

    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;

    nameCol.style.paddingRight = '100px';
    nameCol.style.border = '1px solid black';
    locationCol.style.paddingRight = '100px';
    locationCol.style.border = '1px solid black';

    row.appendChild(nameCol);
    row.appendChild(locationCol);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);
