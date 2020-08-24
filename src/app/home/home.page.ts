import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    num1 = 10;
    num2 = 20;
    sum = this.num1 + this.num2;

    name = "สมชาย";
    lname = "ใจดี";
    status = true; /// true : ใช้งาน, false: ไม่ใช้งาน
    position = "3"; // 1:teacher/2:student/3:staff

    position_list = ["teacher", "student", "staff", "aaa", "bbb"];

    resorts = [];


    user = {};

    constructor(
        private session: SessionService
    ) {

    }
    ngOnInit() {
        this.user = this.session.user;
    }
    GoToProfile() {
        this.session.linkTo("profile");
    }
    GoToResort() {
        this.session.linkTo("resort");
    }
    GoToPage3() {
        this.session.linkTo("page3");
    }
    TestCallService() {
        // this.session.ajax(this.session.api + "example.php", {
        //   val1: "Hello",
        //   val2: "World"
        // }, true).then((res: any) => {
        //   console.log(res);
        // }).catch(error => {
        //   this.session.showAlert(error);
        // });

        this.session.ajax("http://localhost/myAppApi/example.php", {}, true).then((res: any) => {
            // alert(res.data[1].resort_id);
            // alert(res.data[1].resort_name);
            this.resorts = res.data;
        }).catch(err => {
            this.session.showAlert("ติดต่อ server ไม่ได้");
        });
    }
    aaa() {
        // alert("AAAAA");
        // alert("SSSS");
        this.session.showAlert("AAAAA").then(rs => {
            this.session.showAlert("SSSS");
        });
    }
    bbb() {
        this.session.showConfirm("AAA").then(rs => {
            if (rs == true) {
                alert("To do ...");
            }
        });
    }
    ccc() {
        this.session.showToast("AAAAA", 5000);
    }
    ddd() {
        this.session.getStorage("key1").then(rs => {
            alert(rs);
        });
    }
    eee() {
        this.session.setStorage("key1", "Hello").then(rs => {
            alert("Save Success");
        });
    }
    fff() {
        this.session.removeStorage("key1").then(rs => {
            alert("Remove Success");
        });
    }
    ggg() {
        this.session.linkToParam("page3", {
            "data1": "Hello",
            "data2": "World"
        });
    }
}
