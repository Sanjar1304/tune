import { Component } from '@angular/core';
import {SliderComponent} from "./slider/slider.component";
import {SortingModelsComponent} from "./sorting-models/sorting-models.component";
import {RecommendationCardsComponent} from "./recommendation-cards/recommendation-cards.component";
import {GettingCreditComponent} from "./getting-credit/getting-credit.component";
import {QuestionFormComponent} from "./question-form/question-form.component";
import {CalculateCreditComponent} from "./calculate-credit/calculate-credit.component";
import {ProsCardsComponent} from "./pros-cards/pros-cards.component";
import {FaqsComponent} from "./faqs/faqs.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    SortingModelsComponent,
    RecommendationCardsComponent,
    GettingCreditComponent,
    QuestionFormComponent,
    CalculateCreditComponent,
    ProsCardsComponent,
    FaqsComponent
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {

}
