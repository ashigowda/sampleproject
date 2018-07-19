import { Address } from 'mediserve-services';
import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'address-form',
  templateUrl: 'address-form.html'
})

export class AddressForm {

  @Input('address') address: Address;

  constructor(public nav: NavController,
    public view: ViewController) {

  }

}