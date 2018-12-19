import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  public update() {
    let alert = this.alertController.create({
      title: 'Update child profile',
      inputs: [
        {
          name: 'name',
          placeholder: 'Child Name'
        },
        {
          name: 'birthDay',
          placeholder: 'Birth Date',
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            // if (User.isValid(data.username, data.password)) {
            //   // logged in!
            // } else {
            //   // invalid login
            //   return false;
            // }
          }
        }
      ]
    });
    alert.present();
  }

  public delete() {
    let alert = this.alertController.create({
      title: 'Delete child profile',
      message: 'Do you want to delete child profile?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Delete',
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();
  }

}
