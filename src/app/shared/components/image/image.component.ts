import { ChangeDetectionStrategy, Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { FileService } from '../../services';
import { NgClass } from '@angular/common';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  imports: [NgClass, LoaderComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {
  public fileService = inject(FileService)

  url = input.required<string>();
  loading = input<'lazy' | 'eager'>()
  imageClasses = input<string>()
  alt = input<string>()
  loaderClasses = input<string>()
  loaderBorderColor = input<string>('#ccc')
  loaderWidth = input<number>(12);
  loaderHeight = input<number>(12)
  imageBase64 = signal<string>('')
  isLoading = signal<boolean>(true);

  constructor() { }

  ngOnInit() {
    this.fileService.getFileAsBase64(this.url()).pipe(
      tap(res => {
        this.imageBase64.set(res)
      }),
      catchError((err) => {
        console.error(err)
        return EMPTY
      }),
      finalize(() => this.isLoading.set(false))
    ).subscribe()

  }

}
