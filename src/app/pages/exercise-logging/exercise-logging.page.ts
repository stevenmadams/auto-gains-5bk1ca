import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Required for all Ionic components
import { CommonModule } from '@angular/common'; // Provides Angular directives like *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)] and forms


@Component({
  selector: 'app-exercise-logging',
  templateUrl: './exercise-logging.page.html',
  styleUrls: ['./exercise-logging.page.scss'],
  imports: [
    IonicModule, // Import Ionic components
    CommonModule, // Angular structural directives (e.g., *ngIf, *ngFor)
    FormsModule,  // Two-way binding with [(ngModel)]
  ],
})
export class ExerciseLoggingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
