import {MajorModel} from '../major/major.model';

export interface StudentModel {
  id: string;
  nim: string;
  name: string;
  address: string;
  birthdate: any;
  gender: string;
  major: MajorModel;
}
