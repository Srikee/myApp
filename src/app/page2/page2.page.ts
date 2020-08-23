import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  resorts = [];
  constructor(
    private session: SessionService
  ) { }
  ngOnInit() {
    this.LoadData();
  }
  LoadData() {
    this.session.ajax("http://localhost/myAppApi/example.php", {}, true).then((res: any) => {
      this.resorts = res.data;
    });
  }
  GoToResortDetail(resort: any) {
    this.session.linkToParam("resort-detail", {
      resort_id: resort.resort_id
    });
  }
}
