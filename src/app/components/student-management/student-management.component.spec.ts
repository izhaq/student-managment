import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMangmentComponent } from './student-mangment.component';

describe('StudentMangmentComponent', () => {
  let component: StudentMangmentComponent;
  let fixture: ComponentFixture<StudentMangmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMangmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
