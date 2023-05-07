import { Component, Input } from '@angular/core';
import { ProblemDetail } from './dto/error/problem-detail';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  title = '{Home Wallet}';
  public msg?: ProblemDetail;

  clear() {
    this.msg = undefined;
  }
}
