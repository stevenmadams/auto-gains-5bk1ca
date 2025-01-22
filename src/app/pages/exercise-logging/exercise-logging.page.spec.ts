import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseLoggingPage } from './exercise-logging.page';

describe('ExerciseLoggingPage', () => {
  let component: ExerciseLoggingPage;
  let fixture: ComponentFixture<ExerciseLoggingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseLoggingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
