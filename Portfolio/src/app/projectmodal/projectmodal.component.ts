import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projectmodal',
  templateUrl: './projectmodal.component.html',
  styleUrls: ['./projectmodal.component.css']
})
export class ProjectmodalComponent implements OnInit {

  @Input() public modal: boolean = false;
  @Input() public projects: { name: string, description: string, link: string, image: string, details: Array<string> }[] = [];
  @Input() public currentProject: { name?: string, description?: string, link?: string, image?: string, details?: Array<string> } = {};

  @Output() public hideModal = new EventEmitter();

  public keyWords: Array<string> = ['Javascript', 'TypeScript', 'React (hooks)', 'React Redux', 
    'Bootstrap', 'Material-UI', 'Cascading Style Sheets (CSS)', 
    'UX', 'UI', 'Node.js', 'Express', 'Axios', 'Webpack', 'MongoDB',
    'Mongoose', 'PostgreSQL', 'Sequelize', 'MySQL', 'AWS EC2', 'Passport', 
    'Cloudinary', 'Mapbox', 'Git', 'Scrum', 'Agile'];
  

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.hideModal.emit(false);
  }

  // boldWords(str: string, substr: string) {
  //   let strRegExp = new RegExp(substr, 'g');
  //   console.log('ran');
  //     return str.replace(strRegExp, `<b>${substr}<b>`);
  // };

}
