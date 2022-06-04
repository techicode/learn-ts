interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: 'Juan',
  lastName: 'Perez',
  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(employee.fullName());
