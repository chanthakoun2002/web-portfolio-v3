import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  standalone: true,
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  imports: [MatChipsModule],
})
export class Skills {
  languages = ['Java', 'JavaScript', 'TypeScript', 'Python', 'C#', 'HTML', 'CSS'];
  frameworks = ['Angular', 'React', 'Spring Boot', 'Node.js', 'Express'];
  databases = ['MySQL', 'PostgreSQL', 'MongoDB'];
  core = [
    'Full Stack Development',
    'UI/UX',
    'Responsive Design',
    'OOP',
    'Data Structures',
    'Authentication',
    'Debugging',
    'Agile',
    'Project Management',
  ];
}