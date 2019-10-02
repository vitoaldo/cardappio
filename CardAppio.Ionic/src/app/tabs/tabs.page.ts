import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Session } from '../session/session';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public navCtrl: NavController, private session: Session) { }

  ngOnInit() {
    this.session.exist('cliente').then(res => {
      if (!res) {
        this.navCtrl.navigateForward('/');
      }
    });
  }


}
