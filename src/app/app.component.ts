import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from "./core/components/spinner/spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SpinnerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {}

}
