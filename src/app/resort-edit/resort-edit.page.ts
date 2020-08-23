import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resort-edit',
  templateUrl: './resort-edit.page.html',
  styleUrls: ['./resort-edit.page.scss'],
})
export class ResortEditPage implements OnInit {
  resort_id = "";
  resort = {};
  constructor(
    private route: ActivatedRoute,
    private session: SessionService
  ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.resort_id = params.resort_id;
      this.LoadData();
    });
  }
  LoadData() {
    this.session.ajax(this.session.api + "resort-detail-get.php", {
      resort_id: this.resort_id
    }, true).then((res: any) => {
      this.resort = res.data;
    }).catch(err => {
      this.session.showAlert("ติดต่อ server ไม่ได้");
    });
  }
  Edit() {
    this.session.ajax(this.session.api + "resort-edit.php", this.resort, true).then((res: any) => {
      this.session.back();
    }).catch(err => {
      this.session.showAlert("ติดต่อ server ไม่ได้");
    });
  }
}
