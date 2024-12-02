import {Component} from "@angular/core";
import {HeaderComponent} from "../layout/header/header.component";
import { RouterOutlet} from "@angular/router";
import {FooterComponent} from "../layout/footer/footer.component";


@Component({
  templateUrl:"pages.component.html",
  styleUrls:["pages.component.scss"],
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
})
export class PagesComponent{

}
