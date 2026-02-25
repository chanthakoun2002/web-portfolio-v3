import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}