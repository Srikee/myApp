import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1 = 10;
  num2 = 20;
  sum = this.num1 + this.num2;

  name = "สมชาย";
  lname = "ใจดี";
  status = true; /// true : ใช้งาน, false: ไม่ใช้งาน
  position = "3"; // 1:teacher/2:student/3:staff

  position_list = ["teacher", "student", "staff", "aaa", "bbb"];


  constructor(
    private session: SessionService
  ) {

  }
  GoToPage2() {
    this.session.linkTo("page2");
  }
  GoToPage3() {
    this.session.linkTo("page3");
  }
}
