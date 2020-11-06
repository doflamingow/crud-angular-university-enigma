import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router ) {}

  ngOnInit(): void {
  }

  goToMajorList(){
    this.router.navigate(['major']);
  }

  goToMajorForm(){
    this.router.navigate(['major/form']);
  }

  goToStudentList(){
    this.router.navigate(['student']);
  }

  goToStudentForm(){
    this.router.navigate(['student/form']);
  }

}