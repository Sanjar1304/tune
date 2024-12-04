import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrl:'./reset-password.component.scss',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnInit {
  ngOnInit() {}
}
