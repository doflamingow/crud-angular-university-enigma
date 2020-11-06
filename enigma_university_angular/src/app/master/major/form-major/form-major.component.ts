import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MajorService} from '../major.service';
import {Router} from '@angular/router';
import {MajorModel} from '../major.model';

@Component({
  selector: 'app-form-major',
  templateUrl: './form-major.component.html',
  styleUrls: ['./form-major.component.css']
})
export class FormMajorComponent implements OnInit {
majorFrom: FormGroup;
loadedPosts = [];

  constructor(private majorService: MajorService, private router: Router) { }

  ngOnInit(): void {
     this.buildForm();
  }

  private buildForm(): void {
    this.majorFrom = new FormGroup({
    majorName: new FormControl(null, [Validators.required, Validators.maxLength(30)])
    });
  }

  // tslint:disable-next-line:typedef
  submit(postData: MajorModel, valid: boolean){
    if (valid){
      this.majorService.addMajor(postData)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['major']);
        }, error => {
          console.log(error);
        });
    }
  }
  form(property): AbstractControl{
    return this.majorFrom.get(property);
  }

}
