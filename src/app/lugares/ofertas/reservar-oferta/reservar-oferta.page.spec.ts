import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservarOfertaPage } from './reservar-oferta.page';

describe('ReservarOfertaPage', () => {
  let component: ReservarOfertaPage;
  let fixture: ComponentFixture<ReservarOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservarOfertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservarOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
