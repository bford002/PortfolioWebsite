import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    'React', 'Angular', 'Bootstrap', 'Material-UI', 'CSS', 
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Javascript', 'TypeScript', 'React Redux', 
    'UX', 'UI', 'Axios', 'Webpack', 'Mongoose', 'Sequelize', 'MySQL', 'AWS EC2', 'Passport', 
    'Cloudinary', 'Mapbox', 'Git', 'Scrum', 'Agile'
  ]

  topSkills = this.skills.slice(0, 9);

  constructor() { }

  ngOnInit(): void {
  }

}
