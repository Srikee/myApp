import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    user = {};
    constructor(
        private session: SessionService
    ) { }
    ngOnInit() {
        this.user = this.session.user;
    }
    Logout() {
        this.session.status = false;
        this.session.user = {};
        this.session.removeStorage("auth");
        this.session.removeStorage("user");
        this.session.linkTo("login", false);
    }
}
