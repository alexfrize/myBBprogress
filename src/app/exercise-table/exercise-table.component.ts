import { Component, OnInit } from '@angular/core';
import { currentExercises } from './exercise-table-data';
import { MatDialog } from '@angular/material';
import { EditExerciseResultDialogComponent } from './edit-exercise-result-dialog/edit-exercise-result-dialog.component';

@Component({
  selector: 'mybb-exercise-table',
  templateUrl: './exercise-table.component.html',
  styleUrls: ['./exercise-table.component.scss'],
})
export class ExerciseTableComponent implements OnInit {

  exercises = currentExercises;
  currentExerciseIndex = 0;
  currentSetIndex = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.exercises);
  }

  openDialog(exerciseIndex, setIndex) {
    console.log(exerciseIndex, setIndex);
    this.dialog.open(EditExerciseResultDialogComponent, {
      data: {
        exerciseType: this.exercises[exerciseIndex].type,
        setIndex: setIndex,
        weight: this.exercises[exerciseIndex].sets[setIndex].weight,
        repeats: this.exercises[exerciseIndex].sets[setIndex].repeats,
      }
    });
  }
}
