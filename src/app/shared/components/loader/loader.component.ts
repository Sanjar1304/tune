import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';

@Component({

  selector: 'app-loader',
  templateUrl: './loader.component.html',
  imports: [NgStyle, NgClass],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

  width = input<number>(12)
  height = input<number>(12)
  borderColor = input<string>('#ccc')
  classes = input<string>()

  constructor() { }

  ngOnInit() {
  }

}
