import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SessionService } from './session/session.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private session: SessionService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        this.session.getStorage("auth").then(auth => {
            if (auth == true) {
                this.session.getStorage("user").then(user => {
                    if (user != null) {
                        this.session.status = true;
                        this.session.user = user;
                        this.session.linkTo("home", false);
                    } else {
                        this.session.linkTo("login", false);
                    }
                });
            } else {
                this.session.linkTo("login", false);
            }
        });
    }
}
