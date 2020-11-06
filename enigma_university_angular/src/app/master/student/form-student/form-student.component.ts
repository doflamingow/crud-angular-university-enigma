import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
import {MajorModel} from '../../major/major.model';
import {StudentModel} from '../student.model';
import {MajorService} from '../../major/major.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
  studentForm: FormGroup;
  loadMajor = [];

  constructor(private studentService: StudentService, private majorService: MajorService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.onChooseMajor();
  }

  private buildForm(): void {
    this.studentForm = new FormGroup({
        nim: new FormControl(null, [Validators.required, Validators.minLength(12)]),
        name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
        address: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
        birthdate: new FormControl(null, [Validators.required]),
        gender: new FormControl(null, [Validators.required]),
        major: new FormControl(null, [Validators.required])
    });
  }
  submit(postData: StudentModel, valid: boolean){
    if (valid){
      this.studentService.addStudent(postData)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['student']);
        }, error => {
          console.log(error);
        });
    }
  }
  form(property): AbstractControl {
    return this.studentForm.get(property);
  }

  onChooseMajor() {
    this.majorService.getMajor()
      .subscribe((data) => {
        this.loadMajor = data;
      });
  }
}

