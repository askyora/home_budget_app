import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ReceiptLine } from '../dto/receipt-line';
import { ProblemDetail } from '../dto/error/problem-detail';
import { SearchReceiptLine } from '../dto/search-receipt-line';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public msg?: ProblemDetail;
  public lines?: ReceiptLine[] = undefined;
  public searchDto: SearchReceiptLine = {
    startDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7)
      .toISOString()
      .slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    description: '',
  };

  constructor(public api: ApiService) {}

  ngOnInit() {}

  selectStartDate(event: any) {
    if (event.target.value != undefined) {
      this.searchDto.startDate = new Date(event.target.value)
        .toISOString()
        .slice(0, 10);
    }
  }

  selectEndDate(event: any) {
    if (event.target.value != undefined) {
      this.searchDto.endDate = new Date(event.target.value)
        .toISOString()
        .slice(0, 10);
    }
  }

  search() {
    this.searchDto.startDate =
      this.searchDto.startDate.slice(0, 10) + 'T00:00:00+05:30';
    this.searchDto.endDate =
      this.searchDto.endDate.slice(0, 10) + 'T23:59:59+05:30';

    this.api.getReceiptLines(this.searchDto).subscribe(
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
