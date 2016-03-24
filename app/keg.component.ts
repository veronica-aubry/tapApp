import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="container kegDisplay">
      <h4 class="kegName">{{ keg.name }}</h4>
      <h4 class="kegBrewer"> Brewery: {{ keg.brewery }}</h4>
      <h5 class="kegPrice">Price: {{ keg.price }}</h5>
      <p class="kegAbv">ABV: {{ keg.abv }}</p>
      <p class="kegIbu">IBU: {{ keg.ibu }}</p>
      <h5 class="kegPints">PINTS LEFT: {{ keg.pints }}</h5>
    </div>
        <button (click)="servePint(keg)" class="btn btn-default btn-sm">Serve a Pint</button>
  `
})

export class KegComponent {
  public keg: Keg;
  servePint(keg: Keg): void {
     this.keg.pints = (this.keg.pints - 1);
  }
  strongBeer(keg: Keg): boolean {
    if(keg.abv > 6.5) {
      return true;
    }
    return false;
  }

}
