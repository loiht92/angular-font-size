import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-font-size';
  fontSize = 14;
  onChange(value) {
    this.fontSize = value;
  }
}
