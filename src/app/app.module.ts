import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsItemComponent } from './components/students/student-details-item/student-details-item.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserGraduate, faTable, faThList } from '@fortawesome/free-solid-svg-icons';
import { StudentRowItemComponent } from './components/students/student-row-item/student-row-item.component';
import { StudentManagementComponent } from './components/student-management/student-management.component';
import { StudentMainViewComponent } from './components/student-management/student-main-view/student-main-view.component';
import { StudentEditViewComponent } from './components/student-management/student-edit-view/student-edit-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/general-components/dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsItemComponent,
    StudentRowItemComponent,
    StudentManagementComponent,
    StudentMainViewComponent,
    StudentEditViewComponent,
    DropdownComponent,
    StudentsListComponent,
    StudentsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    MatSelectModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUserGraduate, faTable, faThList);
  }
}
