import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Object[] = [
    { username: 'natcat',
    id: 'natalie'
  },
    {username: 'mactac',
    id: 'michael'}
  ];
}
