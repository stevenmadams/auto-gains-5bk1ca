import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseLoggingPage } from './exercise-logging.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseLoggingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseLoggingPageRoutingModule {}
