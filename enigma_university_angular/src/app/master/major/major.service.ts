import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MajorModel} from './major.model';
import {Observable, Observer} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor(private http: HttpClient) { }

  // major: {
  //   majorName: ''
  // };

  // tslint:disable-next-line:typedef
  // addMajor(value){
  //   this.major = value;
  // }
  addMajor(payload: MajorModel): Observable<MajorModel[]> {
    return new Observable((observer: Observer<MajorModel[]>) => {
    this.http.post('api/major', payload)
      .subscribe((response: MajorModel[]) => {
        observer.next(response);
        // console.log(response);
      }, error => {
        observer.error(error.message);
      });
  });
  }

  getMajor(): Observable<MajorModel[]> {
    return new Observable((observer: Observer<MajorModel[]>) => {
      this.http.get<{ [key: string]: MajorModel }>('api/majors')
        .pipe(map(responseData => {
          const temp: MajorModel[] = [];
          // tslint:disable-next-line:forin
          for (const key in responseData) {
            console.log(key);
            console.log(responseData[key]);
            temp.push({
              id: responseData[key].id,
              majorName: responseData[key].majorName
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
