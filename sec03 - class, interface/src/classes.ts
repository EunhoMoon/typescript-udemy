abstract class Department {
  static fisicalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe(): void {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new AccountingDepartment('d2', []);
    }
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string): void {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fisicalYear);

const it = new ItDepartment('i1', ['Eunho']);
console.log(it);
it.describe();

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

// console.log(accounting.mostRecentReport);  // error
accounting.mostRecentReport = 'Year End Report';

accounting.addReports('Somthing went wrong...');

accounting.addEmployee('Max');
accounting.addEmployee('Eunho');

console.log(accounting.getReports());
accounting.printEmployeeInformation();

console.log(accounting.mostRecentReport);

accounting.describe();

console.log(accounting, accounting2);
