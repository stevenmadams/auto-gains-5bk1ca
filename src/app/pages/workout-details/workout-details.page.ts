import { Router } from '@angular/router';


export class WorkoutDetailsPage {
  programId: string = 'exampleProgramId'; // Replace with actual program ID data
  workoutId: string = 'exampleWorkoutId'; // Replace with actual workout ID data

  constructor(private router: Router) {}

  goToLogExercise(programId: string, workoutId: string, exerciseId: string) {
    this.router.navigate([
      `/exercise-logging/${programId}/${workoutId}/${exerciseId}`,
    ]);
  }
}

