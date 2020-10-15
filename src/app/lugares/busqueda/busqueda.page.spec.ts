import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusquedaPage } from './busqueda.page';

describe('BusquedaPage', () => {
  let component: BusquedaPage;
  let fixture: ComponentFixture<BusquedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
