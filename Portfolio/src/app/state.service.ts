import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  modal = false;

  toggleModal() {
    this.modal = !this.modal;
  }

}
