import { Component, OnInit } from '@angular/core';
import { currentExercises } from './exercise-table-data';

@Component({
  selector: 'mybb-exercise-table',
  templateUrl: './exercise-table.component.html',
  styleUrls: ['./exercise-table.component.scss']
})
export class ExerciseTableComponent implements OnInit {

  exercises = currentExercises;
  currentExerciseIndex = 0;
  currentSetIndex = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.exercises);
  }


  openDialog(exerciseIndex, setIndex) {
    console.log(exerciseIndex, setIndex);
  }

}
