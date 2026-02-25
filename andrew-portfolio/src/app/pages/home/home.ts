import { Component } from '@angular/core';
import { About } from "../about/about";
import { Projects } from "../projects/projects";
import { Skills } from "../skills/skills";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [About, Projects, Skills, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
