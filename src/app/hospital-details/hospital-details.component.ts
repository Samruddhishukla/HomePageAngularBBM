import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Hospital } from '../shared/hospital.model';
import { HospitalService } from '../shared/hospital.service';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {

  constructor(public hspService:HospitalService, public toast:ToastrService) { }
  @ViewChild(HospitalFormComponent) hsp:HospitalFormComponent;

  ngOnInit() {
    this.hspService.getHospitals().subscribe(data=>{
      this.hspService.listHospital=data;
    });
  }

  populateHospital(selectedHospital:Hospital)
  {
    console.log(selectedHospital);
    this.hspService.hospitalData=selectedHospital;

    if(this.hsp.isSlide==='off')
    {
      this.hsp.hideShowSlide();
    }
  }

  delete(hospitalId:number)
  {
    if(confirm('Are you really want to delete this record?'))
    {
      this.hspService.deleteHospital(hospitalId).subscribe(data=> {
        console.log('Record deleted..');
        this.hspService.getHospitals().subscribe(data=>{
          this.hspService.listHospital=data;
          this.toast.error('Success','Record Deleted');
        });

      }, err=> {
        console.log('Record not deleted..');

      });
    }
  }


}
