import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMainViewComponent } from './student-main-view.component';

describe('StudentMainViewComponent', () => {
  let component: StudentMainViewComponent;
  let fixture: ComponentFixture<StudentMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
