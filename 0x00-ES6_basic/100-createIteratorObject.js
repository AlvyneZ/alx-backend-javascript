export default function createIteratorObject(report) {
  return {
    items: report.allEmployees,
    [Symbol.iterator]() {
      let department = Object.keys(this.items)[0];
      let depIdx = 0;
      let empIdx = 0;
      return {
        next: () => {
          while (depIdx < Object.keys(this.items).length) {
            if (empIdx < this.items[department].length) {
              const curEmpIdx = empIdx;
              empIdx += 1;
              return {
                value: this.items[department][curEmpIdx],
                done: false,
              };
            }
            depIdx += 1;
            empIdx = 0;
            department = Object.keys(this.items)[depIdx];
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
