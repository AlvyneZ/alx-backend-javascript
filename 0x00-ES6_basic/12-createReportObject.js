export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (allEmployeesList) => Object.keys(allEmployeesList).length,
  };
}
