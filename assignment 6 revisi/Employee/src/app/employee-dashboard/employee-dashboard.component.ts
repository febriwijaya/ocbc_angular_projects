import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  // formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAdd! : boolean;
  showUpdate!  : boolean;
  constructor(private formbuilder: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  formValue = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    role: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ], )
  })

  get title(){
    return this.formValue.get('title');
  }

  get firstName(){
    return this.formValue.get('firstName');
  }

  get lastName(){
    return this.formValue.get('lastName');
  }

  get email(){
    return this.formValue.get('email');
  }

  get role(){
    return this.formValue.get('role');
  }

  get password(){
    return this.formValue.get('password');
  }

  get confirmPassword(){
    return this.formValue.get('confirmPassword');
  }


  successNotification() {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Employee Added Successfully!',
    })
  }

  errorNotification() {
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }

  updatedNotification() {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Updated Successfully!',
    })
  }

  postEmployeeDetails() {
    this.employeeModelObj.title = this.formValue.value.title;
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.role = this.formValue.value.role;
    this.employeeModelObj.password = this.formValue.value.password;
    this.employeeModelObj.confirmPassword = this.formValue.value.confirmPassword;

    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      this.successNotification();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      this.errorNotification(); 
    })
  }

  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  getAllEmployee() {
    this.api.getEmployee()
    .subscribe(res=> {
      this.employeeData = res;
    })
  }

  deleteEmployee(row: any) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
      if (result.isConfirmed) {
        this.api.deleteEmployee(row.id)
        .subscribe(res=> {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getAllEmployee();
        })
      }
    })
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObj.id = row.id;
    this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['role'].setValue(row.role);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['confirmPassword'].setValue(row.confirmPassword);
  }

  updateEmployeeDetails() {
    this.employeeModelObj.title = this.formValue.value.title;
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.role = this.formValue.value.role;
    this.employeeModelObj.password = this.formValue.value.password;
    this.employeeModelObj.confirmPassword = this.formValue.value.confirmPassword;
    this.api.updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
    .subscribe(res=>{
      this.updatedNotification();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
  }

}
