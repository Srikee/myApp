import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    user = {
        email: "",
        password: ""
    };
    constructor(
        private session: SessionService
    ) { }
    ngOnInit() {
    }
    Login() {
        this.session.ajax(this.session.api + "login.php", this.user, true).then((res: any) => {
            if (res.status == true) {
                this.session.status = true;
                this.session.user = res.user;   // ข้อมูลของคนที่ลอกอิน
                this.session.setStorage("auth", true);
                this.session.setStorage("user", res.user);
                this.session.linkTo("home", false);
            } else {
                this.session.showAlert("รหัสไม่ถูก โปรดเข้าสู่ระบบอีกครั้ง");
            }
        }).catch(err => {
            this.session.showAlert("ติดต่อ server ไม่ได้");
        });
    }
}
