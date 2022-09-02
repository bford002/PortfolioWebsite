import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: { name: string, description: string, link: string, image: string, details: Array<string> }[] = [
    {
      name: 'Fern Herm',
      description: 'A pet/plant sitting app, allowing users to create and accept jobs based on their needs.',
      link: 'github.com/fern-herm/pet-plant-sitting',
      image: '../assets/img/FernHerm.png',
      details: [ 
        "Used Mapbox and React Map to create a map to display jobs and events around the user’s area by making calls to the Mapbox API based on their profile’s location.",
        'Included a navigation aspect by geolocating the user and the specific event, giving users access to step-by-step directions to events from their profile’s location or their current location. Styled the instructions with Bootstrap.',
        'Included a dark mode feature using a Context Provider and React hooks, allowing users to change their theme to a darker color scheme for accessibility purposes.'
      ]
    },
    {
      name: 'Big Easy',
      description: 'A casino app designed to replicate different casino games to give the user the rush of gambling.',
      link: 'github.com/TheYesMen/Iben-sCasino',
      image: '../assets/img/BigEasyCasino.png',
      details: [
        'Added new functionality to an existing legacy codebase, while staying true to the app architecture and styling of the original developers.',
        'Made calls, via Axios, to a noSQL database through Express and Node.js to give users a daily reward, encouraging them to return to the app.',
        'Hosted images with Cloudinary to allow users to change their profile pictures.',
        'Enabled an option to change a user’s theme to dark mode, through React.'
      ]
    },
    {
      name: 'Smarter Than',
      description: 'A trivia app that is designed to track your progress as you play through multiple rounds.',
      link: 'github.com/TheYesMen/Are-you-smarter-than-an-OS-student-',
      image: '../assets/img/SmarterThan.png',
      details: [
        'Stored all users in a MongoDB database after a user logged-in through Google OAuth.',
        'Made Axios calls to the database through Express to retrieve users and display their stats to a React frontend.',
        'Used Material-table to build a leaderboard of all users’ scores and stats.',
        'Displayed a top-5 leaderboard on the home page using conditional rendering and Material-UI.'
      ]
    }
  ];

  public modal = false;

  public currentProject: object = {};
  
  constructor() {
  }

  ngOnInit(): void {
  }

  showModal(name: string) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].name === name) {
        this.currentProject = this.projects[i];
      }
    }
    this.modal = true;
  }

}
