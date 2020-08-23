import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.page.html',
  styleUrls: ['./resort.page.scss'],
})
export class ResortPage implements OnInit {
  resorts = [];
  constructor(
    private session: SessionService
  ) { }
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.LoadData();
  }
  LoadData() {
    this.session.ajax("http://localhost/myAppApi/resort-get.php", {}, true).then((res: any) => {
      this.resorts = res.data;
    }).catch(err => {
      this.session.showAlert("ติดต่อ server ไม่ได้");
    });
  }
  GoToResortDetail(resort: any) {
    this.session.linkToParam("resort-detail", {
      resort_id: resort.resort_id
    });
  }
  Edit(resort: any) {
    this.session.linkToParam("resort-edit", {
      resort_id: resort.resort_id
    });
  }
  Del(resort: any) {

    this.session.showConfirm("ต้องการลบใช่ไหม ?").then(rs => {
      if (rs == true) {
        this.session.ajax(this.session.api + "resort-del.php", {
          resort_id: resort.resort_id
        }, true).then((res: any) => {
          this.LoadData();
        }).catch(err => {
          this.session.showAlert("ติดต่อ server ไม่ได้");
        });
      }
    });
  }
  Add() {
    this.session.linkTo("resort-add");
  }
}
