import { Workout } from "./workout.model";

export interface Program {
    id: string;                // e.g., a UUID or a timestamp-based string
    name: string;
    weeks: number;            // how many weeks before deload
    hasDeloadWeek: boolean;    
    deloadAdjustment?: number; // user can specify how much to reduce load during deload
    workouts: Workout[];
  }
  