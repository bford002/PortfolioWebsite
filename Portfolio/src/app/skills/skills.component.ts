import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      skill: 'React',
      logo: '../../assets/img/reactjs-icon.svg'
    },
    {
      skill: 'Angular',
      logo: '../../assets/img/angular.svg'
    },
    {
      skill: 'Bootstrap',
      logo: '../../assets/img/bootstrap-4.svg'
    },
    {
      skill: 'Material-UI',
      logo: '../../assets/img/material-ui-1.svg'
    },
    {
      skill: 'CSS',
      logo: '../../assets/img/css-3-logo-svgrepo-com.svg'
    },
    {
      skill: 'Node.js',
      logo: '../../assets/img/nodejs-2.svg'
    },
    {
      skill: 'Express',
      logo: '../../assets/img/express-js-icon.svg'
    },
    {
      skill: 'MongoDB',
      logo: '../../assets/img/mongodb.svg'
    },
    {
      skill: 'PostgreSQL',
      logo: '../../assets/img/postgresql-vertical.svg'
    },
    // 'React', 'Angular', 'Bootstrap', 'Material-UI', 'CSS', 
    // 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Javascript', 'TypeScript', 'React Redux', 
    // 'UX', 'UI', 'Axios', 'Webpack', 'Mongoose', 'Sequelize', 'MySQL', 'AWS EC2', 'Passport', 
    // 'Cloudinary', 'Mapbox', 'Git', 'Scrum', 'Agile'
  ]

  topSkills = this.skills.slice(0, 9);


  constructor() { }

  ngOnInit() {
  }

}
