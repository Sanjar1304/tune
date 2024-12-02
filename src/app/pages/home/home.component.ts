import {Component, OnInit, signal} from '@angular/core';
import {SliderComponent} from "./slider/slider.component";
import {SortingModelsComponent} from "./sorting-models/sorting-models.component";
import {RecommendationCardsComponent} from "./recommendation-cards/recommendation-cards.component";
import {GettingCreditComponent} from "./getting-credit/getting-credit.component";
import {QuestionFormComponent} from "./question-form/question-form.component";
import {CalculateCreditComponent} from "./calculate-credit/calculate-credit.component";
import {ProsCardsComponent} from "./pros-cards/pros-cards.component";
import {FaqsComponent} from "./faqs/faqs.component";
import {HeaderComponent} from "../../layout/header/header.component";
import {FooterComponent} from "../../layout/footer/footer.component";
import {NAVBAR_MENUS} from "../../core/constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``,
  standalone: true,
  imports: [
    SliderComponent,
    SortingModelsComponent,
    RecommendationCardsComponent,
    GettingCreditComponent,
    QuestionFormComponent,
    CalculateCreditComponent,
    ProsCardsComponent,
    FaqsComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export  class HomeComponent{}
