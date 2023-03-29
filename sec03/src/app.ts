class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  getReports() {
    return this.reports;
  }
}

// const accounting = new Department('d1', 'Accounting');

// accounting.addEmployee('Eunho');
// accounting.addEmployee('Max');

// accounting.describe();
// accounting.printEmployeeInformation();

const it = new ItDepartment('i1', ['Eunho']);
console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReports('Somthing went wrong...');
console.log(accounting.getReports());
