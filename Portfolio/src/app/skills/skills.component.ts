import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    'Javascript', 'TypeScript', 'React (hooks)', 'React Redux', 
    'Bootstrap', 'Material-UI', 'Cascading Style Sheets (CSS)', 
    'UX', 'UI', 'Node.js', 'Express', 'Axios', 'Webpack', 'MongoDB',
    'Mongoose', 'PostgreSQL', 'Sequelize', 'MySQL', 'AWS EC2', 'Passport', 
    'Cloudinary', 'Mapbox', 'Git', 'Scrum', 'Agile'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
