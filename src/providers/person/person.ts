import { Injectable } from '@angular/core';

/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonProvider {

  constructor() {}

  getList(){
    return [
      {
        name: "Jhon Doe",
        description: "Software Architect & developer",
        img: "assets/imgs/p1.svg",
        country: "USA",
        interests: [
          "UML",
          "JAVA",
          "SPRING FRAMEWORK"
        ]
      },
      {
        name: "Alex Mahone",
        description: "Software Developer",
        img: "assets/imgs/p2.svg",
        country: "UNITED ARAB EMIRATES",
        interests: [
          "angular 2,4 and 5",
          "Cross platform application",
          "Python",
          "Django"
        ]
      },
      {
        name: "Mark Borat",
        description: "Senior Software Developer",
        img: "assets/imgs/p3.svg",
        country: "CANADA",
        interests: [
          "Ruby on Rails",
          "Rspec"
        ]
      },
      {
        name: "Waylon Dalton",
        description: "Data Scientist",
        img: "assets/imgs/p4.svg",
        country: "PAKISTAN",
        interests: [
          "R language",
          "Python/Panda"
        ]
      },
      {
        name: "Justine Henderson",
        description: "Full Stack Developer",
        img: "assets/imgs/p5.svg",
        country: "RUSSIA",
        interests: [
          "Python/Django",
          "Angular 2,4 and 5",
          "nginx",
          "uwsgi, gunicorn"
        ]
      }
    ];
  }

}
