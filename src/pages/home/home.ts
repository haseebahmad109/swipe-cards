import { 
  Component,
} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PersonProvider } from '../../providers/person/person';

import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  persons: Array<any>;

  totalPersonCount:number = 0;

  constructor(
    public navCtrl: NavController,
    private personProvider: PersonProvider,
    private toastCtrl: ToastController
  ) {
    this.generateCards();
  }

  generateCards(){
    this.persons = this.personProvider.getList();
    this.totalPersonCount = this.persons.length;
  }

  presentToast(message, duration=3000, position='bottom') {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
    toast.present();
  }

  throwLeft(index){
    setTimeout(()=>{
      this.persons.splice(index, 1);
      this.presentToast("Thrown Left");
    }, 200);
  }

  throwRight(index){
    setTimeout(()=>{
      this.persons.splice(index, 1);
      this.presentToast("Thrown Right");
    }, 200);
  }

}
