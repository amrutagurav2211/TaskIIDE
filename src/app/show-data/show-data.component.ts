import { Component } from '@angular/core';
import { DataSerService } from '../data-ser.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {
 public dt: any=[];

constructor(private DtSer: DataSerService) {
      this.getFun();
    }

    getFun() {
        this.DtSer.getdata().subscribe((res:any) => {
            this.dt = res;
            console.log(res);
        });
    }

    onDel(data:any){
      this.DtSer.Delete(data.id).subscribe((res:any) =>{
        console.log(res);
        this.getFun=res;
        alert("Your Data is deleted Successfully")
      })
    }
    
      UpdateData(dt:any){
        this.DtSer.patchData(dt);
      }
}
