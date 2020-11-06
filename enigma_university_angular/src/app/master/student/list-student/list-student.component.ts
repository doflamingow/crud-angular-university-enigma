import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(private studentService: StudentService) {
  }

  loadedPosts = [];

  ngOnInit(): void {
    this.onGetStudent();
  }

  onGetStudent() {
    // Send Http request
    this.studentService.getStudent()
      .subscribe(data => {
        console.log(data);
        this.loadedPosts = data;
      }, error => {
        alert(error);
      });

  }
}
