import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ExerciseTableComponent } from './exercise-table/exercise-table.component';
import { EditExerciseResultDialogComponent } from './exercise-table/edit-exercise-result-dialog/edit-exercise-result-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ExerciseTableComponent,
    EditExerciseResultDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  entryComponents: [EditExerciseResultDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
