import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'mybb-edit-exercise-result-dialog',
  templateUrl: './edit-exercise-result-dialog.component.html',
  styleUrls: ['./edit-exercise-result-dialog.component.scss']
})
export class EditExerciseResultDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditExerciseResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

  decreaseWeight() {
    this.data.weight--;
  }
  increaseWeight() {
    this.data.weight++;
  }

  decreaseRepeats() {
    this.data.repeats--;
  }

  increaseRepeats() {
    this.data.repeats++;
  }
}
