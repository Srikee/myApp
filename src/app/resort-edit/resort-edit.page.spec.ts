import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResortEditPage } from './resort-edit.page';

describe('ResortEditPage', () => {
    let component: ResortEditPage;
    let fixture: ComponentFixture<ResortEditPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResortEditPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ResortEditPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
