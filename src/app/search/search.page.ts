import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ReceiptLine } from '../dto/receipt-line';
import { ProblemDetail } from '../dto/error/problem-detail';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public endDate = new Date().toISOString().slice(0, 10);
  public startDate = new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7)
    .toISOString()
    .slice(0, 10);
  public msg?: ProblemDetail;
  public lines?: ReceiptLine[] = undefined;

  constructor(public api: ApiService) {}

  ngOnInit() {}

  selectStartDate(event: any) {
    if (event.target.value != undefined) {
      this.startDate = new Date(event.target.value).toISOString().slice(0, 10);
    }
  }

  selectEndDate(event: any) {
    if (event.target.value != undefined) {
      this.endDate = new Date(event.target.value).toISOString().slice(0, 10);
    }
  }

  go() {
    this.api
      .getReceiptLines(
        this.startDate + 'T00:00:00+05:30',
        this.endDate + 'T23:59:59+05:30'
      )
      .subscribe(
        (res) => {
          if (res.status == 200) {
            this.lines = undefined;
            let r = res.body;
            if (r != null && r.length > 0) {
              this.lines = r;
            }
            this.msg = {
              message: 'Receipt successfully saved.',
              title: 'Search Action',
              success: 'true',
            } as ProblemDetail;
          }
        },
        (err) => {
          this.msg = JSON.parse(JSON.stringify(err));
        }
      );
  }
}
