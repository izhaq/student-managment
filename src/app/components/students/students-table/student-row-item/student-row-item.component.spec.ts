import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRowItemComponent } from './student-row-item.component';

describe('StudentTableViewComponent', () => {
  let component: StudentRowItemComponent;
  let fixture: ComponentFixture<StudentRowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRowItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
