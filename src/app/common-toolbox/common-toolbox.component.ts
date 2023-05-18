import { Component, Input, OnInit } from '@angular/core';
import { ProblemDetail } from '../dto/error/problem-detail';

@Component({
  selector: 'app-common-toolbox',
  templateUrl: './common-toolbox.component.html',
  styleUrls: ['./common-toolbox.component.scss'],
})
export class CommonToolboxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() displayMessage: ProblemDetail | undefined;

  clear() {
    this.displayMessage = undefined;
  }
}
