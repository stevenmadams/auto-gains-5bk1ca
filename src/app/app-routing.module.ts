import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'program-list', pathMatch: 'full' },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { 
    path: 'program-list', 
    loadChildren: () => import('./pages/program-list/program-list.module').then(
      m => m.ProgramListPageModule) },
  { 
    path: 'program-details/:id', 
    loadChildren: () => import('./pages/program-details/program-details.module').then(
      m => m.ProgramDetailsPageModule) },

  {
    path: 'exercise-logging/:programId/:workoutId/:exerciseId',
    loadChildren: () =>
      import('./pages/exercise-logging/exercise-logging.module').then(
        m => m.ExerciseLoggingPageModule
      ),
  },
  {
    path: 'workout-details',
    loadChildren: () => import('./pages/workout-details/workout-details.module').then( m => m.WorkoutDetailsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
