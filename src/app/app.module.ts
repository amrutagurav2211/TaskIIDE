import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDataComponent } from './form-data/form-data.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    FormDataComponent,
    ShowDataComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    AutoCompleteModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    CardModule
  ],
  providers: [],

  exports:[
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    RadioButtonModule,
    CardModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
