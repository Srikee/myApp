import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-resort-add',
  templateUrl: './resort-add.page.html',
  styleUrls: ['./resort-add.page.scss'],
})
export class ResortAddPage implements OnInit {

  resort = {};

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }
  Add() {
    this.session.ajax("http://localhost/myAppApi/resort-add.php", this.resort, true).then((res: any) => {
      this.session.back();
    }).catch(err => {
      this.session.showAlert("ติดต่อ server ไม่ได้");
    });
  }
}
