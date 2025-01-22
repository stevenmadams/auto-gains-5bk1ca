import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ExerciseLog } from 'src/app/models/exercise-log';

import { IonicModule } from '@ionic/angular'; // Required for Ionic components
import { CommonModule } from '@angular/common'; // Provides Angular directives like *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // Provides [(ngModel)] and form handling


@Component({
  selector: 'app-exercise-logging',
  templateUrl: './exercise-logging.page.html',
  styleUrls: ['./exercise-logging.page.scss'],
  imports: [
    IonicModule, // Required for Ionic components
    CommonModule, // Provides Angular's common directives
    FormsModule, // Enables forms and [(ngModel)]
  ],
})
export class ExerciseLoggingPage {
  weight!: number;
  reps!: number;
  rir!: number;

  constructor(private router: Router, private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async logSet() {
    const oneRM = this.weight * (1 + (this.reps + this.rir) / 30);

    const log: ExerciseLog = {
      date: new Date(),
      weight: this.weight,
      reps: this.reps,
      rir: this.rir,
      calculatedOneRM: oneRM,
    };

    // Retrieve existing logs
    const logs = (await this.storage.get('exerciseLogs')) || [];
    logs.push(log);

    // Save updated logs
    await this.storage.set('exerciseLogs', logs);

    console.log('Set logged successfully:', log);

    // Navigate back or show a success message
    this.router.navigate(['/previous-page']); // Adjust the route as needed
  }
}
