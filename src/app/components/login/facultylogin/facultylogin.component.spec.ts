import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FacultyLoginComponent } from './facultylogin.component';

describe('FacultyLoginComponent', () => {
  let component: FacultyLoginComponent;
  let fixture: ComponentFixture<FacultyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultyLoginComponent],
      imports: [FormsModule, RouterTestingModule] // FormsModule for ngModel, RouterTestingModule for router
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
