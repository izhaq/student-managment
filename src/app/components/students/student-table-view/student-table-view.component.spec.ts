import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableViewComponent } from './student-table-view.component';

describe('StudentTableViewComponent', () => {
  let component: StudentTableViewComponent;
  let fixture: ComponentFixture<StudentTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
