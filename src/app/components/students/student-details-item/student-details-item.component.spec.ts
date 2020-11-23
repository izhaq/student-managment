import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsItemComponent } from './student-details-item.component';

describe('StudentDetailsViewComponent', () => {
  let component: StudentDetailsItemComponent;
  let fixture: ComponentFixture<StudentDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
