import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h4>New Keg</h4>
      <input placeholder="Name" class="col-sm-8" #newName><br>
      <input placeholder="Brewery" class="col-sm-8" #newBrewery><br>
      <input placeholder="Price" class="col-sm-8" #newPrice><br>
      <input placeholder="ABV" class="col-sm-8" #newAbv><br>
      <input placeholder="IBU" class="col-sm-8" #newIbu>
      <button (click)="addKeg(newName, newBrewery, newPrice, newAbv, newIbu)" class="btn btn-primary add-button col-sm-8">Add</button>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrewery: HTMLInputElement, userPrice: HTMLInputElement, userAbv: HTMLInputElement, userIbu: HTMLInputElement) {
    this.onSubmitNewKeg.emit(userName.value);
    this.onSubmitNewKeg.emit(userBrewery.value);
    this.onSubmitNewKeg.emit(userPrice.value);
    this.onSubmitNewKeg.emit(userAbv.value);
    this.onSubmitNewKeg.emit(userIbu.value);
    userName.value = "";
    userBrewery.value = "";
    userPrice.value = "";
    userAbv.value = "";
    userIbu.value = "";

  }
}
