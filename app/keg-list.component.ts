import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { EditKegDetails } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetails, NewKegComponent],
  templateUrl: 'app/keg-list.component.html'
})

export class KegListComponent{
  public kegList: Keg[];
  public keg = Keg;
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
  createKeg(name: string, brewery: string, price: number, abv: number, ibu: number): void {
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
  lowKeg(keg: Keg): boolean {
      if(keg.pints <= 122) {
        return true;
      }
      return false;
    }

  cheapBeer(kegList: Keg[]): boolean[] {
    var cheapBeerList: boolean[] = [];
    for(var keg of kegList) {
      if(keg.price <= 5.0) {
        cheapBeerList.push(true);
      }
      cheapBeerList.push(false);
    }
    return cheapBeerList
  }
}
