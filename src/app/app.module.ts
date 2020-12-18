import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from './components/data-table/data-table.component';
@NgModule({
   declarations: [
      AppComponent,
      DataTableComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule, 
      FormsModule,
      ReactiveFormsModule,
      MatTableModule,
      MatPaginatorModule,
      AppRoutingModule,
      HttpClientModule,
      MatSortModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }