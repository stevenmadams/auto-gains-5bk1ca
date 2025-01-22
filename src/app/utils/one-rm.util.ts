// src/app/utils/one-rm.util.ts
export function calculateOneRM(weight: number, reps: number, RIR: number): number {
    return weight * (1 + (reps + RIR) / 30);
  }
  