import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {MajorModel} from '../major/major.model';
import {map} from 'rxjs/operators';
import {StudentModel} from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  // addStudent(value){
  //   this.student = value;
  // }

  addStudent(payload: StudentModel): Observable<StudentModel[]> {
    return new Observable((observer: Observer<StudentModel[]>) => {
      this.http.post('api/student', payload)
        .subscribe((response: StudentModel[]) => {
          observer.next(response);
        }, error => {
          observer.error(error.message);
        });
    });
  }

  // tslint:disable-next-line:typedef
  getStudent(): Observable<StudentModel[]> {
    return new Observable((observer: Observer<StudentModel[]>) => {
      this.http.get<{ [key: string]: StudentModel }>('api/students')
        .pipe(map(responseData => {
          const temp: StudentModel[] = [];
          // tslint:disable-next-line:forin
          for (const key in responseData) {
            console.log(key);
            console.log(responseData[key]);
            temp.push({
              id: responseData[key].id,
              nim: responseData[key].nim,
              name: responseData[key].name,
              address: responseData[key].address,
              birthdate: responseData[key].birthdate,
              gender: responseData[key].gender,
              major: responseData[key].major
            });
          }
          return temp;
        }))
        .subscribe((data: any) => {
          observer.next(data);
        }, error => {
          console.log(error);
          observer.error(error.message);
        });
    });
  }
}
