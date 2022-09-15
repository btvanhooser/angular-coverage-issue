import { Component } from '@angular/core';

/* istanbul ignore next */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coverage-issue';

  public someFunction() {
    console.log('something');
  }
}
