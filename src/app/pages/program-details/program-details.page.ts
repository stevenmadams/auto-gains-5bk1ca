// program-details.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';
import { Program } from 'src/app/models/program.model';
import { v4 as uuidv4 } from 'uuid';
import { IonicModule } from '@ionic/angular'; // Required for all Ionic components
import { CommonModule } from '@angular/common'; // Provides Angular directives like *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)] and forms



@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.page.html',
  styleUrls: ['./program-details.page.scss'],
  imports: [
    IonicModule, // Import Ionic components
    CommonModule, // Angular structural directives (e.g., *ngIf, *ngFor)
    FormsModule,  // Two-way binding with [(ngModel)]
  ],
})
export class ProgramDetailsPage implements OnInit {
  programId: string;
  program?: Program;

  constructor(private route: ActivatedRoute, private programService: ProgramService) {
    this.programId = this.route.snapshot.paramMap.get('id') || '';
  }

  async ngOnInit() {
    await this.loadProgram();
  }

  async loadProgram() {
    this.program = await this.programService.getProgramById(this.programId);
  }

  async addWorkout() {
    if (!this.program) return;
    this.program.workouts.push({
      id: uuidv4(),
      name: 'New Workout',
      exercises: []
    });
    await this.programService.saveProgram(this.program);
    await this.loadProgram();
  }
}
