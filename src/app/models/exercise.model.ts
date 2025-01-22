import { ExerciseSet } from './exercise-set.model';

export interface Exercise {
  id: string;
  name: string;
  sets: ExerciseSet[];
  oneRM?: number; // store the current 1RM for this exercise
}
