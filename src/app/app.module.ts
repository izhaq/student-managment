import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsViewComponent } from './components/students/student-details-view/student-details-view.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserGraduate, faTable, faThList } from '@fortawesome/free-solid-svg-icons';
import { StudentTableViewComponent } from './components/students/student-table-view/student-table-view.component';
import { StudentManagementComponent } from './components/student-management/student-management.component';
import { StudentMainViewComponent } from './components/student-management/student-main-view/student-main-view.component';
import { StudentEditViewComponent } from './components/student-management/student-edit-view/student-edit-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/general-components/dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsViewComponent,
    StudentTableViewComponent,
    StudentManagementComponent,
    StudentMainViewComponent,
    StudentEditViewComponent,
    DropdownComponent
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
    // Add an icon to the library for convenient access in other components
    library.addIcons(faUserGraduate, faTable, faThList);
  }
}
