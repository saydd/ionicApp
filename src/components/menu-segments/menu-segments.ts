import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
/*
  Generated class for the MenuSegments component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'menu-segments',
  templateUrl: 'menu-segments.html'
})
export class MenuSegmentsComponent {

  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

}
