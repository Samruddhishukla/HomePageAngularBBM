import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from './hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private myhttp:HttpClient) { }
  hospitalUrl:string='https://localhost:5001/api/Hospitals';
  listHospital:Hospital[]=[];

  hospitalData:Hospital=new Hospital();

  saveHospital()
  {
    return this.myhttp.post(this.hospitalUrl,this.hospitalData);
  }

  updateHospital()
  {
    return this.myhttp.put(`${this.hospitalUrl}/${this.hospitalData.hospitalId}`,this.hospitalData);
  }

  getHospitals() :Observable<Hospital[]>
  {
    return this.myhttp.get<Hospital[]>(this.hospitalUrl);
  }

  deleteHospital(hospitalId:number)
  {
    return this.myhttp.delete(`${this.hospitalUrl}/${hospitalId}`);
  }

}

