import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleLugarPage } from './detalle-lugar.page';

describe('DetalleLugarPage', () => {
  let component: DetalleLugarPage;
  let fixture: ComponentFixture<DetalleLugarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLugarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleLugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
