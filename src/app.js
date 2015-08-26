import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {Person}  from './models/person.js'

export class App {

  constructor() {
    this.heading = "Welcome to aurelia";
    this.aurliaLog = 'This is where new logs will be shown ' + "<br/>";
    this.person = new Person();
    this.selectedLender = '';
    this.Lenders = [{
      id: '1',
      firstName: 'Jim',
      middleName: 'J',
      lastName: 'Carry',
      subTitles: [1, 2, 3]
    }, {
        id: '2',
        firstName: 'Paritosh',
        middleName: 'P',
        lastName: 'Baghel',
        subTitles: [4, 5, 6]
      }, {
        id: '3',
        firstName: 'John',
        middleName: 'F',
        lastName: 'kennedy',
        subTitles: [7, 8, 9]
      }];
  }

  get Logs() {
    return this.aurliaLog;
  }

  addMoneyToMyAccount() {
    console.log(this.selectedLender);
  }

}