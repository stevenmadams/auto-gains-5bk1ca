import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Program } from '../models/program.model';

@Injectable({ providedIn: 'root' })
export class ProgramService {
  private PROGRAM_KEY = 'programs';

  constructor(private storageService: StorageService) {}

  async getAllPrograms(): Promise<Program[]> {
    return (await this.storageService.get<Program[]>(this.PROGRAM_KEY)) || [];
  }

  async saveProgram(program: Program): Promise<void> {
    const programs = await this.getAllPrograms();
    const existingIndex = programs.findIndex(p => p.id === program.id);

    if (existingIndex > -1) {
      // Update
      programs[existingIndex] = program;
    } else {
      // Create
      programs.push(program);
    }

    await this.storageService.set(this.PROGRAM_KEY, programs);
  }

  async getProgramById(id: string): Promise<Program | undefined> {
    const programs = await this.getAllPrograms();
    return programs.find(p => p.id === id);
  }

  async deleteProgram(id: string): Promise<void> {
    let programs = await this.getAllPrograms();
    programs = programs.filter(p => p.id !== id);
    await this.storageService.set(this.PROGRAM_KEY, programs);
  }
}
