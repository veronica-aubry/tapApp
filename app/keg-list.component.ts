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
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(values) {
    var keg = new Keg(values[0], values[1], values[2], values[3], values[4], this.kegList.length);
    this.kegList.push(keg);
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

  strongBeer(keg: Keg): string {
    if(keg.abv >= 6.5) {
      return "strong";
    }else {
      return "weak";
    }
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
