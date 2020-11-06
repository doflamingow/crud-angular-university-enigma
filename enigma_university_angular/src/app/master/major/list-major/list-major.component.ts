import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {MajorService} from '../major.service';

@Component({
  selector: 'app-list-major',
  templateUrl: './list-major.component.html',
  styleUrls: ['./list-major.component.css']
})
export class ListMajorComponent implements OnInit {
  loadedPosts = [];
  isLoaded = false;
  timer: Subscription;
  counting: number;
  constructor(private majorService: MajorService) { }

  ngOnInit(): void {
    this.onGetMajor();
  }

  // tslint:disable-next-line:typedef
  // onGetMajor() {
  //   // Send Http request
  //   this.isLoaded = true;
  //   if (this.isLoaded) {
  //     this.timer = interval(1000)
  //       .subscribe(count => {
  //         console.log(count);
  //         this.counting = count;
  //       });
  //   }
  //   this.majorService.getMajor()
  //     .subscribe(data => {
  //       console.log(data);
  //       this.loadedPosts = data;
  //       this.isLoaded = false;
  //       this.timer.unsubscribe();
  //     }, error => {
  //       this.isLoaded = false;
  //       this.timer.unsubscribe();
  //     });
  // }
  // tslint:disable-next-line:typedef
  onGetMajor() {
    // Send Http request
    this.majorService.getMajor()
      .subscribe(data => {
        console.log(data);
        this.loadedPosts = data;
      }, error => {
        alert(error);
      });
  }

}
