import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
// import { EditKegDetails } from './edit-keg-details.component';
// import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent],
  templateUrl: 'app/keg-list.html'
})

export class KegListComponent{
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(name: string, brand: string, price: number, abv: number, ibu: number): void {
    this.kegList.push(
      new Keg(name, brewery, price, abv, ibu, this.kegList.length)
    );
  }
  listKegsPerBrewery(chosenBrewery: string, kegList: Keg[]): String[] {
    var breweries: String[] = [];
    for(var keg of kegList) {
      if(keg.brewery === chosenBrewery) {
        breweries.push(keg.name);
      }
    }
    return breweries;
  }
  lowKeg(kegList: Keg[]): String[] {
    var lowKegList: String[] = [];
    for(var keg of kegList) {
      if(keg.pints <= 10) {
        lowKegList.push(keg.name);
      }
    }
    return lowKegList;
  }
}
