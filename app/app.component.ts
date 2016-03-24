import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { KegListComponent } from './keg-list.component';
import { EditKegDetails } from './edit-keg-details.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent, EditKegDetails],
  template: `
    <div class='container jumbotron'>
      <h1>Tap App</h1>
    </div>
    <div class='container'>
      <keg-list [kegList] = "kegs"
      (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Tricerahops", "Ninkasi", 5.5, 8.0, 100, 0),
      new Keg("1554", "NewBelgium", 4.75, 5.6, 21, 1),
      new Keg("PBR", "Pabst", 2.5, 4.7, 6, 2),
      new Keg("Strawberry Schwarzcake", "Wild Wolf", 5.5, 5.0, 20, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
