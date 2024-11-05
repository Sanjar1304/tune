import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {QuestionService} from "./services/question.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, FormsModule, TranslocoPipe],
  templateUrl: './question-form.component.html',
  styles: `
     .checkbox-custom {
        display: none;
     }

    /* Create a custom checkbox */
    .checkbox-custom + div::before {
      content: '';
      width: 1.5rem; /* Adjust size as needed */
      height: 1.5rem; /* Adjust size as needed */
      border: 2px solid #fff; /* White border */
      border-radius: 0.25rem; /* Tailwind's rounded */
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.5rem; /* Tailwind's mr-2 */
      background-color: transparent;
      transition: border-color 0.2s;
    }

    /* Checkmark */
    .checkbox-custom:checked + div::after {
      content: '';
      position: absolute;
      left: 0.575rem;
      top: 0.575rem;
      width: 0.375rem;
      height: 0.75rem;
      border: solid #fff; /* White checkmark */
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    @media screen and (min-width: 375px) {
      .checkbox-custom + div::before {
        width: 4.2rem;
      }

      .checkbox-custom:checked + div::after {
        left: 0.575rem;
        top: 1.675rem;
      }
    }

    @media screen and (min-width: 640px) {
      .checkbox-custom + div::before {
        width: 2.5rem;
      }

      .checkbox-custom:checked + div::after {
        left: 0.675rem;
        top: 0.575rem;
      }
    }

    @media screen and (min-width: 768px){
      .checkbox-custom + div::before {
        width: 2.2rem;
      }

      .checkbox-custom:checked + div::after {
        left: 0.675rem;
        top: 0.575rem;
      }
    }

    @media screen and (min-width: 1024px){
      .checkbox-custom + div::before {
        width: 3.5rem;
      }

      .checkbox-custom:checked + div::after {
        left: .650rem;
        top: 1.1rem;
      }
    }

    @media screen and (min-width: 1280px){
      .checkbox-custom + div::before {
        width: 2.3rem;
      }

      .checkbox-custom:checked + div::after {
        left: .6rem;
        top: .6rem;
      }
    }

    @media screen and (min-width: 1536px){
      .checkbox-custom + div::before {
        width: 2.2rem;
      }

      .checkbox-custom:checked + div::after {
        left: .6rem;
        top: .6rem;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionFormComponent implements OnInit{

  questionForm!: FormGroup;
  isButtonChecked: boolean = false

  private fb = inject(FormBuilder);
  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private questionService = inject(QuestionService);

  public ngOnInit(){
    this.questionForm = this.fb.group({
      fullName: ['',[ Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]*$')]]
    })
    this.isCheckboxClicked();
  }

  public isCheckboxClicked() {
    this.isButtonChecked = !this.isButtonChecked;
  }

  public subscribeQuestion(form: FormGroup){
    if (this.questionForm.valid) {
      console.log('Form submitted:', this.questionForm.value);
    }
    const fullName = form.get('fullName')?.value;
    const phoneNumber = form.get('phoneNumber')?.value;


    this.questionService.sendQuestion({fullName:fullName, phoneNumber: phoneNumber, email:null, productId: null, productType:'ALL'})
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          console.log(res)
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
    })
  }
}
