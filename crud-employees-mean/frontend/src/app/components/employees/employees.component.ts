import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      // Si existe el id actualizo
      this.employeeService.putEmployee(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Actualizado'});
        this.getEmployees();
      })
    } else {
      // Si no se crea
      this.employeeService.postEmployee(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Grabado'});
        this.getEmployees();
      });
    }
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(res => {
      this.employeeService.employees = res as Employee[];
    });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(employee: Employee) {
    if (confirm('Está seguro de eliminarlo?')) {
      this.employeeService.deleteEmployee(employee)
      .subscribe(res => {
        this.resetForm();
        this.getEmployees();
        M.toast({html: 'Eliminado satisfactoriamente'});
      })
    };
  }

  resetForm(form?: NgForm){
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
