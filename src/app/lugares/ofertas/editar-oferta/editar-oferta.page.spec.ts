import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarOfertaPage } from './editar-oferta.page';

describe('EditarOfertaPage', () => {
  let component: EditarOfertaPage;
  let fixture: ComponentFixture<EditarOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOfertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
