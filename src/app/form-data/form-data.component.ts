import { Component } from '@angular/core';
import { DataSerService } from '../data-ser.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {
  
public idd:any;
public tsk:any;
public tl:any;
public com:any;

public alldata:any;

constructor(private ser:DataSerService){
  this.getAllData();
}

  getAllData(){
    this.ser.getdata().subscribe((res:any)=>
    {
      console.log(res);
      this.alldata=res;
    })
  }

  onSubmitData(data:any){
    this.ser.postdata(data.value).subscribe((res:any)=>{
      console.log(res);
      this.getAllData();
      alert("Your Data is Submitted Successfully")
    })
  }
  ngDoCheck(){
    this.patchApiData();
  }

  UpdateRecord(frm:any){
    this.ser.putData(frm.value).subscribe((res:any)=>{
      console.log(res);
      alert("Your Data is Updated Successfully")
    })  
  }

  patchApiData(){
    this.idd=this.ser.idety;
    this.tsk=this.ser.tNAme;
    this.tl=this.ser.ttl;
    this.com=this.ser.complete;
  }


}
