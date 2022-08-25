import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Fern Herm',
      description: 'A pet/plant sitting app, allowing users to create and accept jobs based on their needs.',
      link: 'github.com/fern-herm/pet-plant-sitting'
    },
    {
      name: 'Big Easy',
      description: 'A casino app designed to replicate different casino games to give the user the rush of gambling.',
      link: 'github.com/TheYesMen/Iben-sCasino'
    },
    {
      name: 'Smarter Than',
      description: 'A trivia app that is designed to track your progress as you play through multiple rounds.',
      link: 'github.com/TheYesMen/Are-you-smarter-than-an-OS-student-'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
