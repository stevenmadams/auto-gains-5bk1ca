import { ExerciseLog } from "./exercise-log";

export interface Exercise {
    id: string;
    name: string;
    oneRM?: number; // Optional: Store the calculated 1RM
    logs?: ExerciseLog[]; // Optional: Store logs of each set
  }
  