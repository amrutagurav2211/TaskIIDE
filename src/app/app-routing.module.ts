import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component';
import { FormDataComponent } from './form-data/form-data.component';

const routes: Routes = [
  { path:'formData', component:FormDataComponent},
  { path:'tskTable', component:ShowDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
