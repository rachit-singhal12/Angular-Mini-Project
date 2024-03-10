import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Counter Project';
  counter=0;
  increaseCounter()
  {
    this.counter++;
  }
  decreaseCounter()
  {
    this.counter--;
  }
}
