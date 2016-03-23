import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h4>New Keg</h4>
      <label for="newKegName">Name of new beer:
      <input placeholder="Name" class="col-sm-8" #newName>
      <label for="newKegBrewery">Brewery of new beer:
      <input placeholder="Brewery" class="col-sm-8" #newBrewery>
      <label for="newKegPrice">Price of new beer:
      <input placeholder="Price" class="col-sm-8" #newPrice>
      <label for="newKegAbv">ABV of new beer:
      <input placeholder="ABV" class="col-sm-8" #newAbv>
      <label for="newKegIbu">IBU of new beer:
      <input placeholder="IBU" class="col-sm-8" #newIbu>
      <button (click)="addKeg(newName, newBrewery, newPrice, newAbv, newIbu)" class="btn btn-primary add-button">Add</button>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrewery: HTMLInputElement)
}
