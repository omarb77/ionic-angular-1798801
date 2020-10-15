import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservacionesPage } from './reservaciones.page';

describe('ReservacionesPage', () => {
  let component: ReservacionesPage;
  let fixture: ComponentFixture<ReservacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
