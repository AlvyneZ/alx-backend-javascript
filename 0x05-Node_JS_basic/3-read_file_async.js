const fs = require('fs');

function countStudents(path) {
  const countPromise = new Promise(
    (resolve, reject) => {
      fs.readFile(
        path, 'utf-8',
        (err, data) => {
          if (err) {
            reject(new Error('Cannot load the database'));
            return;
          }
          const fileContent = data.toString().trim().split('\n');

          console.log(`Number of students: ${fileContent.length - 1}`);
          const studentFields = {};
          const fileColumns = fileContent[0].split(',');
          const firstNameColumn = fileColumns.indexOf('firstname');
          const fieldColumn = fileColumns.indexOf('field');

          for (const studentRecord of fileContent.slice(1)) {
            const student = studentRecord.split(',');
            if (!(student[fieldColumn] in studentFields)) {
              studentFields[student[fieldColumn]] = [student[firstNameColumn]];
            } else {
              studentFields[student[fieldColumn]].push(student[firstNameColumn]);
            }
          }

          for (const [field, group] of Object.entries(studentFields)) {
            console.log(`Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`);
          }
          resolve();
        },
      );
    },
  );
  return countPromise;
}

module.exports = countStudents;
