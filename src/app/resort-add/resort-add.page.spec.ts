import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResortAddPage } from './resort-add.page';

describe('ResortAddPage', () => {
  let component: ResortAddPage;
  let fixture: ComponentFixture<ResortAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResortAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
