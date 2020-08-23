import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-resort-detail',
    templateUrl: './resort-detail.page.html',
    styleUrls: ['./resort-detail.page.scss'],
})
export class ResortDetailPage implements OnInit {
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
}
