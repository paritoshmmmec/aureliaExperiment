import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import PouchDB from 'pouchdb';

export class App {

  constructor() {
    this.pouch = new PouchDB('LogOfUser');
    this.heading = "Welcome to aurelia";
    this.aurliaLogs = [];
    this.selectedLender = '';
    this.pouch.allDocs({
       include_docs: true,
    }).then(function(response){
      console.log("getting reponse data" + response);
      console.log(response);
    });
    this.Lenders = [{
      id: '1',
      firstName: 'Jim',
      middleName: 'J',
      money: 0,
      lastName: 'Carry',

      subTitles: [1, 2, 3]
    }, {
        id: '2',
        firstName: 'Paritosh',
        middleName: 'P',
        lastName: 'Baghel',
        money: 0,
        subTitles: [4, 5, 6]
      }, {
        id: '3',
        firstName: 'John',
        middleName: 'F',
        lastName: 'kennedy',
        money: 0,
        subTitles: [7, 8, 9]
      }];
  }

  addMoneyToMyAccount() {
    this.selectedLender.money += parseFloat(this.amountToTransfer);
    this.aurliaLogs.push("The amount of money is tranfered to " + this.firstName +
      ' ' + this.lastName + ",metioned amount  is " + this.amountToTransfer);

    this.pouch.put({
      _id:this.selectedLender.id+this.selectedLender.firstName,
      title: 'Heroes'
    }).then(function (response) {
      // handle response
    }).catch(function (err) {
      console.log(err);
    });
    
    
  }

  onselectedChanges() {
    this.firstName = this.selectedLender.firstName;
    this.lastName = this.selectedLender.lastName;
  }

}