import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      alert(params.data1);
      alert(params.data2);
    });
  }
  Back() {
    alert("To do..");
    this.session.back();
  }
}
