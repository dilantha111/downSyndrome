import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data:string[] = [
    "assets/SampleImg/1.jpg",
    "assets/SampleImg/2.jpg",
    "assets/SampleImg/3.jpg",
    "assets/SampleImg/4.jpg"
  ];

  constructor(public navCtrl: NavController) {

  }

}
