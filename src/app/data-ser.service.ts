import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSerService {

  public idety:any;
  public ttl:any;
  public complete:any;
  public tNAme:any;

  constructor(private http:HttpClient) {
    
   }
   getdata(){
    return this.http.get("http://localhost:3000/taskData");
   }

   postdata(dt:any){
    return this.http.post("http://localhost:3000/taskData",dt);
   }

  Delete(id:any){
    return this.http.delete("http://localhost:3000/taskData/"+id);
   }

   putData(dt:any){
    return this.http.put("http://localhost:3000/taskData/"+dt.id,dt);
   }

   patchData(dt1:any){
    this.idety=dt1.id;
    this.ttl=dt1.title;
    this.complete=dt1.Comp;
    this.tNAme=dt1.task;
   }
}
