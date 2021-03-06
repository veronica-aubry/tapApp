import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  directives: [KegComponent, NewKegComponent],
  templateUrl: 'app/edit-keg-details.component.html'
})

export class EditKegDetails {
  public keg: Keg;
}
