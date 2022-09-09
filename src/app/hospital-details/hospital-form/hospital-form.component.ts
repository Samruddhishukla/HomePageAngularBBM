import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Hospital } from 'src/app/shared/hospital.model';
import { HospitalService } from 'src/app/shared/hospital.service';

@Component({
  selector: 'app-hospital-form',
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.css']
})
export class HospitalFormComponent implements OnInit {

  constructor(public hspService: HospitalService, public toast:ToastrService) { }
  @ViewChild('checkbox1') checkBox:ElementRef;
  isSlide:string='off';

  ngOnInit() {
  }

  submit(form:NgForm)
  {
    if(this.hspService.hospitalData.hospitalId==0)
      this.insertHospital(form);
    else
      this.updateHospital(form);
  }

  insertHospital(myForm:NgForm)
  {
    this.hspService.saveHospital().subscribe(d=> {
      this.resetForm(myForm);
      this.refreshData();
      this.toast.success('Success','Record Saved');
    });
  }

  updateHospital(myForm:NgForm)
  {
    this.hspService.updateHospital().subscribe(d=> {
      this.resetForm(myForm);
      this.refreshData();
      this.toast.success('Success','Record Updated');
    });

  }

  resetForm(myForm:NgForm)
  {
    myForm.form.reset();
    this.hspService.hospitalData=new Hospital();
    this.hideShowSlide();
  }

  refreshData()
  {
    this.hspService.getHospitals().subscribe(res=> {
      this.hspService.listHospital=res;
    });
  }

  hideShowSlide()
  {
    if(this.checkBox.nativeElement.checked)
    {
      this.checkBox.nativeElement.checked=false;
      this.isSlide='off';
    }
    else
    {
      this.checkBox.nativeElement.checked=true;
      this.isSlide='on';
    }
  }

}
