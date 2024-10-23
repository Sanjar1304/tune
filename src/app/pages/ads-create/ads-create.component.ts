import {AsyncPipe, JsonPipe, NgFor, NgIf} from "@angular/common";
import {CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, Input, OnInit, SimpleChanges, ViewChild, inject,} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import { Router, RouterLink } from "@angular/router";

import { AddsService } from './services/ads.service';
import { BreadcrumbComponent } from "../../core/components/breadcrumb/breadcrumb.component";
import { CarSelectInfoResponse } from "./models/car-select-Info.model";
import { ICarModelList } from './models/cars.model';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField} from "@angular/material/form-field";
import { Observable } from "rxjs";
import {TranslocoPipe} from "@jsverse/transloco";
import {UiSvgIconComponent} from "../../core/components/ui-svg-icon/ui-svg-icon.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ads-create',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    TranslocoPipe,
    RouterLink,
    MatCheckbox,
    FormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    UiSvgIconComponent,
    BreadcrumbComponent,
    ReactiveFormsModule,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './ads-create.component.html',
  styles: `
    :host {
      ::ng-deep {
        .mdc-checkbox__background {
          border-radius: 4px;
          border: 1px solid #B0B8C1;
        }

        .mdc-checkbox:hover .mdc-checkbox__ripple {
          background-color: transparent !important;
        }

        .mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background, .mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{
        }

        .mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple {
          background-color: transparent !important;
        }

        .mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple {
          background-color: transparent !important;
        }

        .mdc-checkbox__native-control:active:enabled:checked~.mdc-checkbox__background {
          background-color: #060563;
          border-color: #060563;
        }

        .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background {
          background-color: #060563;
          border-color: #060563;
        }

        .custom-sena-form {
          height: 30px !important;
          width: 75px !important;
        }

        .mdc-text-field {
          border-radius: 10px;
        }

        .mat-mdc-form-field-infix {
          width: 210px;
        }

        .mat-mdc-text-field-wrapper {
          height: 48px;
        }

        .mat-mdc-select-arrow-wrapper {
          display: none;
        }

        .mat-mdc-form-field-bottom-align::before {
          display: none;
        }

        .mdc-text-field--no-label .mat-mdc-form-field-infix{
          padding-top: 12px;
          padding-bottom: 12px;
        }

        .custom-sena-form .mdc-text-field {
          border-radius: 6px;
        }

        .custom-sena-form .mdc-text-field {
          padding: 0 7px;
        }

        .custom-sena-form .mdc-text-field--no-label .mat-mdc-form-field-infix{
          padding-top: 5px;
        }

        .custom-sena-form .mdc-text-field--filled:not(.mdc-text-field--disabled) {
          background-color: #E5E7EA !important;
        }

        .mdc-text-field--filled:not(.mdc-text-field--disabled) {
          background: #fff;
        }

        .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after,
        .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{
          border-bottom-color: transparent;
        }

        .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::after,
        .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
          border-bottom-color: transparent;
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdsCreateComponent implements OnInit {

  carForm!: FormGroup;
  carInfos!: ICarModelList;
  carSelectData: null | CarSelectInfoResponse = null;
  carSelectName!: string[];
  carImageUrls: string[] = [];

  byAssetSelected = false;
  carId!: string;

  @ViewChild('carForm') form!: NgForm;
  @Input() mainPanel: null | CarSelectInfoResponse = null;
  @Input() extraPanel: null | CarSelectInfoResponse = null;
  @Input() optionalPanel: null | CarSelectInfoResponse = null;
  @Input() contactsPanel: null | CarSelectInfoResponse = null;

  selectedFiles?: FileList;
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

  name: string = '';
  city: string = '';
  phone: string = '';
  comment: string = '';
  mainPanelSelects: any[] = [];
  extraOptions: any[] = [];
  optionalOptions: any[] = [];
  contactOptions: any[] = []

  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private fb = inject(FormBuilder);
  private adsService = inject(AddsService);
  private destroy$ = inject(DestroyRef);

  ngOnChanges(changes: SimpleChanges) {
    if (changes["mainPanel"] && this.mainPanel) {
      this.updateMainPanelControls();
    }
    if (changes["extraPanel"] && this.extraPanel) {
      this.updateExtraPanelControls();
    }
    if (changes["optionalPanel"] && this.optionalPanel) {
      this.updateOptionalPanelControls();
    }
    if (changes["contactsPanel"] && this.contactsPanel) {
      this.updateOptionalPanelControls();
    }
  }

  public ngOnInit(): void {
    this.getCarData();
    this.sendCarId(this.carSelectData);
  }

  public updateMainPanelControls() {
    this.mainPanelSelects = this.mainPanel?.items.map(item => item.currentValue || '') || [];
    this.cdr.detectChanges();
  }

  public updateExtraPanelControls() {
    this.extraOptions = this.extraPanel?.items.map(() => false) || [];
    this.cdr.detectChanges();
  }

  public updateOptionalPanelControls() {
    this.optionalOptions = this.optionalPanel?.items.map(() => false) || [];
    this.cdr.detectChanges();
  }

  public updateContactsPanelControls() {
    this.contactOptions = this.contactsPanel?.items.map(() => false) || [];
    this.cdr.detectChanges();
  }


  public sendCarId(id: any){
      if(id){
        console.log(id)
        this.byAssetSelected = true;
        this.carId = id;
        console.log(this.byAssetSelected)
      }
      this.adsService.getSelectOption(id)
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe({
          next: (res) => {
            if (res) {
              this.carSelectData = res as CarSelectInfoResponse;
              this.mainPanel = { items: res.items.filter(val => val.position === 'MAIN') };

              this.extraPanel = { items: res.items.filter(val => val.position === 'EXTRA') };
              this.optionalPanel = { items: res.items.filter(val => val.position === 'OPTIONS') };
              this.contactsPanel = { items: res.items.filter(val => val.position === 'CONTACTS')}
              this.cdr.detectChanges();
            }
          },
          error: (err) => {
            console.error('Error fetching car select data:', err);
          }
        })

  }


  public getCarData(){
    this.adsService.getCarInfos({ page: 0, size: 1})
    .pipe(takeUntilDestroyed(this.destroy$))
    .subscribe({
      next: res => {
        this.carInfos = res as ICarModelList;
        this.cdr.detectChanges();
      },
      error: err => console.log(err)
    })
  }


  public selectFile(event: Event): void{
    const input = event.target as HTMLInputElement;

    if (input.files) {
      this.selectedFiles = input.files;
      this.previews = [];
      const length = this.selectedFiles.length;

      for (let i = 0; i < length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
          this.cdr.detectChanges();
        };
        reader.readAsDataURL(this.selectedFiles[i]);
      }
      this.uploadFiles();
    } else {
      this.selectedFiles = undefined;
    }
  }

  public uploadFiles(): void{
    if(this.selectedFiles){
      for(let i = 0; i < this.selectedFiles.length; i++){
        this.sendImage(this.selectedFiles[i]);
        this.cdr.detectChanges()
      }
      this.selectedFiles = undefined;
    } else {
      this.message.push('No files selected for upload')
    }
  }

  public sendImage(file: File){
    const formData = new FormData();
    formData.append('file', file)
    this.adsService.uploadImage(formData).pipe(takeUntilDestroyed(this.destroy$)).subscribe({
      next: res => {
        this.carImageUrls.push(res?.url as unknown as string);
        this.cdr.markForCheck()
      },
      error: err => {
        console.log(err);
        this.cdr.markForCheck()
      }
    })
  }

  public onSubmit() {

    const mainPanelID = this.mainPanel?.items.map(val => val.id) || [];
    const extraPanelID = this.extraPanel?.items.map(val => val.id) || [];
    const optionalPanelID = this.optionalPanel?.items.map(val => val.id) || [];
    const contactsPanelID = this.contactsPanel?.items.map(val => val.id) || [];

    // Map all panel values
    const mainPanelValue = this.mainPanelSelects.map(val => val) || [];
    const extraPanelValue = this.extraOptions.map(val => val) || [];
    const optionalPanelValue = this.optionalOptions.map(val => val) || [];
    const contactsPanelValue = this.contactOptions.map(val => val) || [];

    if (this.mainPanel && this.mainPanel.items) {
      this.mainPanel.items.forEach((select, index) => {
          if (select.currentValue) {
              mainPanelValue[index] = select.currentValue;
              if (!mainPanelID.includes(select.id)) {
                  mainPanelID.push(select.id);
              }
          }
      });
  }

    const properties = [
      ...mainPanelID.map((id, index) => ({
          propertyId: id,
          value: mainPanelValue[index] || ''
      })),
      ...extraPanelID.map((id, index) => ({
          propertyId: id,
          value: extraPanelValue[index] || ''
      })),
      ...optionalPanelID.map((id, index) => ({
          propertyId: id,
          value: optionalPanelValue[index] || ''
      })),
      ...contactsPanelID.map((id, index) => ({
          propertyId: id,
          value: contactsPanelValue[index] || ''
      }))
  ];


    const formData = {
      categoryId: 1,
      price: {
        amount: 15000,
        scale: 1,
        currency: 'USD'
      },
      translates: [
        {
          lang: 'RUS',
          name: '',
          description: this.comment
        }
      ],
      properties,
      images: this.carImageUrls
    };

    const formDataWithAssetID = {
      assetId: this.carId,
      categoryId: 1,
      price: {
        amount: 15000,
        scale: 1,
        currency: 'USD'
      },
      translates: [
        {
          lang: 'RUS',
          name: '',
          description: this.comment
        }
      ],
      properties,
      images: this.carImageUrls
    };

    console.log(this.carId);
    if(!this.byAssetSelected){
      this.adsService.createProduct(formData).subscribe(res => {
        console.log(res)
      })
    } else {
      this.adsService.createProductByAsset(formDataWithAssetID).subscribe(res => {
        console.log(res)
      })
    }
  }
}
