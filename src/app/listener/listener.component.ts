import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.scss']
})
export class ListenerComponent {
  constructor() { }

  /* istanbul ignore next */
  @HostListener('click')
  public clickResponse() {
    console.log('some functionality');
  }

  /* istanbul ignore next */
  public someFunction() {
    console.log('some functionality not tied to a listener');
  }
}
