var employees = []

function Employee(Name, JobTitle, Salary, Status) {
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = "Full Time"


}
Employee.prototype.printEmployeeForm = function() { console.log("Name: " + this.Name + "," + " Job Title: " + this.JobTitle + "," + " Salary " + this.Salary + "," + " Status: " + this.Status) }
var employee1 = new Employee("Jack", "Consultant", "80,000 ", this.Status)
employee1.printEmployeeForm()
var employee2 = new Employee("Jill", "Architect", "140,000", this.Status)
employee2.Status = "Contract"
employee2.printEmployeeForm()
var employee3 = new Employee("Jam", "Doctor", "350,000", this.Status)
employee3.printEmployeeForm()
employees.push(employee1, employee2, employee3)
console.log(employees)