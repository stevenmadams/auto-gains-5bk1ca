import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';
import { Router } from '@angular/router';
import { Program } from 'src/app/models/program.model';
import { v4 as uuidv4 } from 'uuid'; // for unique IDs
import { IonicModule } from '@ionic/angular'; // Required for all Ionic components
import { CommonModule } from '@angular/common'; // Provides Angular directives like *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)] and forms


@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.page.html',
  styleUrls: ['./program-list.page.scss'],
  imports: [
    IonicModule, // Import Ionic components
    CommonModule, // Angular structural directives (e.g., *ngIf, *ngFor)
    FormsModule,  // Two-way binding with [(ngModel)]
  ],
})
export class ProgramListPage implements OnInit {
  programs: Program[] = [];

  constructor(private programService: ProgramService, private router: Router) {}

  async ngOnInit() {
    this.loadPrograms();
  }

  async ionViewWillEnter() {
    // Reload programs whenever we re-enter this page
    await this.loadPrograms();
  }

  async loadPrograms() {
    this.programs = await this.programService.getAllPrograms();
  }

  async createNewProgram() {
    // For demonstration, we’ll just create a blank new Program
    const newProgram: Program = {
      id: uuidv4(),
      name: 'My New Program',
      weeks: 4,
      hasDeloadWeek: false,
      deloadAdjustment: 0.5, // default 50% if user toggles it on
      workouts: []
    };
    await this.programService.saveProgram(newProgram);
    await this.loadPrograms();
  }

  goToProgramDetails(programId: string) {
    this.router.navigate(['/program-details', programId]);
  }
}
