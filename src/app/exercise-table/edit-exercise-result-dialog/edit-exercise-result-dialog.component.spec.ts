import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExerciseResultDialogComponent } from './edit-exercise-result-dialog.component';

describe('EditExerciseResultDialogComponent', () => {
  let component: EditExerciseResultDialogComponent;
  let fixture: ComponentFixture<EditExerciseResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExerciseResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExerciseResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
