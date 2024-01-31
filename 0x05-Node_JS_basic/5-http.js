const http = require('http');
const fs = require('fs');

const HOST = 'localhost';
const PORT = 1245;

const app = http.createServer();

const CSV = process.argv.length > 2 ? process.argv[2] : '';

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
          let retVal = '';

          retVal = retVal.concat(`Number of students: ${fileContent.length - 1}`);
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
            retVal = retVal.concat(`\nNumber of students in ${field}: ${group.length}. List: ${group.join(', ')}`);
          }
          resolve(retVal);
        },
      );
    },
  );
  return countPromise;
}

const ROUTES = [
  {
    route: '/',
    handler(_, res) {
      res.write('Hello Holberton School!');
      res.end();
    },
  },
  {
    route: '/students',
    handler(_, res) {
      res.write('This is the list of our students\n');
      countStudents(CSV)
        .then((students) => {
          res.write(students);
          res.end();
        })
        .catch((err) => {
          res.write((err instanceof Error) ? err.message : err.toString());
          res.end();
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of ROUTES) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST);

module.exports = app;
